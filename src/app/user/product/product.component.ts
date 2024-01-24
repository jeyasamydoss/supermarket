import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public productData: any[] = [];
  id: any;
  categoryTitle: any;

  constructor(private api: ApiService, private routes: ActivatedRoute, private router: Router) {
    this.id = this.routes.snapshot.queryParams['id'];
  }

  ngOnInit() {
    if (this.id) {
      this.getProductByCategoryId();
    } else {
      this.getAllProduct();
    }
  }

  getAllProduct() {
    this.api.get('product/getProductAll').subscribe((res) => {
      this.productData = res;
    });
  }

  getCategoryId() {
    this.api.get("category/getByCategoryId/" + this.id).subscribe((res) => {
      this.categoryTitle = res.name;
    });
  }

  getProductByCategoryId() {
    this.getCategoryId();
    this.api.get("product/getByCategoryId/" + this.id).subscribe((res) => {
      this.productData = res;
    });
  }

  getImageUrl(imageName: string): string {
    return `http://localhost:8080/${imageName}`;
  }

  cartItems: any[] = [];

  addToCart(product: any) {
    const storedUser = localStorage.getItem('user');

    if (!storedUser) {
      this.router.navigate(['/login']);
      return;
    }

    this.api.notifyCartUpdate();
    const user = JSON.parse(storedUser);
    const cartItem = {
      productName: product.productName,
      price: product.price,
      quantity: 1,
      image: product.imageGalleries[0].name,
      user: {
        id:user.id
      }  // Assuming userId is the correct property for user identification
    };

    this.api.postWithBody('addcart', cartItem).subscribe(
      (response) => {
        console.log('Product added to cart:', response);
        this.cartItems.push(response); // Store the added product locally
      },
      (error) => {
        console.error('Error adding product to cart:', error);
        // Handle error appropriately
      }
    );
  }

  getCartItems() {
    this.api.get('addcart').subscribe(
      (data) => {
        console.log('Cart Items:', data);
        this.cartItems = data;
      },
      (error) => {
        console.error('Error fetching cart items:', error);
        // Handle error appropriately
      }
    );
  }
}
