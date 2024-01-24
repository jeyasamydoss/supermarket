import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-addcart',
  templateUrl: './addcart.component.html',
  styleUrls: ['./addcart.component.css']
})
export class AddcartComponent implements OnInit {
data: any;
  gotocheckout() {
this.route.navigate(['checkout']);
  }
  cartItems: any[] = [];

  constructor(private api: ApiService,private route:Router) { }

  ngOnInit() {
    this.getCartItems();
  }

  getCartItems() {

    const storedUser = localStorage.getItem('user')
    if (!storedUser) {
      // this.router.navigate(['/login']);
      return;
    }

    const user = JSON.parse(storedUser);
    this.api.get('addcart/userById/'+user.id).subscribe(
      (data) => {
        console.log('Cart Items:', data);
        this.cartItems = data;
      },
      (error) => {
        console.error('Error fetching cart items:', error);
      }
    );
  }
  getTotal(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
  getImageUrl(imageName: string): string {
    return `http://localhost:8080/${imageName}`;
  }
  calculateTotal(item: any): number {
    return item.price * item.quantity;
  }

  calculateGrandTotal(): number {
    return this.cartItems.reduce((total, item) => total + this.calculateTotal(item), 0);
  }

 

  incrementQuantity(index: number): void {
    this.cartItems[index].quantity++;
  }

  decrementQuantity(index: number): void {
    if (this.cartItems[index].quantity > 1) {
      this.cartItems[index].quantity--;
    }
  }
  updateQuantity(index: number, event: Event): void {
    const newQuantity = (event.target as HTMLInputElement).valueAsNumber;
    this.cartItems[index].quantity = newQuantity;
  }
  
  deleteItem(id: number): void {
    this.api.delete(`addcart/${id}`).subscribe(
      () => {
        console.log('Item deleted successfully');
        this.getCartItems(); 
      },
      (error) => {
        console.error('Error deleting item:', error);
       
      }
    );
  }
  
  
}
