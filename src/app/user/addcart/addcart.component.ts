import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-addcart',
  templateUrl: './addcart.component.html',
  styleUrls: ['./addcart.component.css']
})
export class AddcartComponent implements OnInit {
data: any;
buy:any;
  gotocheckout() {
    this.buy= true;


// this.route.navigate(['checkout']);
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
  
  checkForm =new FormGroup({
    fname:new FormControl("",[Validators.required]),
    lname:new FormControl("",[Validators.required]),
    landmark:new FormControl("",[Validators.required]),
    address:new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.required]),
    mobile:new FormControl("",[Validators.required]),
    pin:new FormControl("",[Validators.required]),
  })
  get fname(){
    return this.checkForm.get('fname');
  }
  get lname(){
    return this.checkForm.get('lname');
  }
  get landmark(){
    return this.checkForm.get('landmark');
  }
  get address(){
    return this.checkForm.get('address');
  }
  get email(){
    return this.checkForm.get('email');
  }
  get mobile(){
    return this.checkForm.get('mobile');
  }
  get pin(){
    return this.checkForm.get('pin');
  }
}
