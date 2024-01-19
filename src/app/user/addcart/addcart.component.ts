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

  // constructor(private route:Router) { }

  // ngOnInit() {
  // }
  gotocheckout() {
this.route.navigate(['checkout']);
  }
  cartItems: any[] = [];

  constructor(private api: ApiService,private route:Router) { }

  ngOnInit() {
    this.getCartItems();
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
  getTotal(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
  getImageUrl(imageName: string): string {
    return `http://localhost:8080/${imageName}`;
  }
  // Function to calculate the total for an individual item based on quantity
  calculateTotal(item: any): number {
    return item.price * item.quantity;
  }

  // Function to calculate the grand total for all items in the cart
  calculateGrandTotal(): number {
    return this.cartItems.reduce((total, item) => total + this.calculateTotal(item), 0);
  }

  // Function to update the quantity for an item
 

  // Function to increment the quantity for an item
  incrementQuantity(index: number): void {
    this.cartItems[index].quantity++;
  }

  // Function to decrement the quantity for an item
  decrementQuantity(index: number): void {
    if (this.cartItems[index].quantity > 1) {
      this.cartItems[index].quantity--;
    }
  }
  updateQuantity(index: number, event: Event): void {
    const newQuantity = (event.target as HTMLInputElement).valueAsNumber;
    this.cartItems[index].quantity = newQuantity;
  }
  
  
  
  
}
