import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { SnackbarServiceService } from 'src/app/common/snackbarService.service';
import { PaymentComponent } from '../payment/payment.component';


@Component({
  selector: 'app-addcart',
  templateUrl: './addcart.component.html',
  styleUrls: ['./addcart.component.css']
})
export class AddcartComponent implements OnInit {
  data: any;
  buy: any;
  userId: any;
  gotocheckout() {
    if(this.cartItems.length > 0){

      this.buy = true;
    }


  }
  cartItems: any[] = [];

  constructor(private api: ApiService,private dialog:MatDialog, private route: Router, private router: Router, private snackBar: SnackbarServiceService) { }

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
    this.userId = user.id;
    this.api.get('addcart/userById/' + user.id).subscribe(
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
        this.snackBar.showErrorMessage('Product  Removed in Cart');
        this.getCartItems();
      },
      (error) => {
        console.error('Error deleting item:', error);

      }
    );
  }

  checkForm = new FormGroup({
    firstName: new FormControl("", [Validators.required]),
    lastName: new FormControl("", [Validators.required]),
    landmark: new FormControl("", [Validators.required]),
    address: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required]),
    mobile: new FormControl("", [Validators.required]),
    pincode: new FormControl("", [Validators.required]),
    orderItem: new FormControl([] as { productName: string; price: number; quantity: number; image: string }[]),
    user: new FormControl({ id: "" }),
    grantTotal: new FormControl()
  });

  get firstName() {
    return this.checkForm.get('firstName');
  }
  get lastName() {
    return this.checkForm.get('lastName');
  }
  get landmark() {
    return this.checkForm.get('landmark');
  }
  get address() {
    return this.checkForm.get('address');
  }
  get email() {
    return this.checkForm.get('email');
  }
  get mobile() {
    return this.checkForm.get('mobile');
  }
  get pincode() {
    return this.checkForm.get('pincode');
  }

  order() {
    const dialogRef = this.dialog.open(PaymentComponent, {
      width: '550px', height:'650px',
    });
    dialogRef.afterClosed().subscribe((result:boolean) =>{

 
    if(result ===  true){
      const orderItemsArray = this.cartItems.map(item => ({
        productName: item.productName,
        price: item.price,
        quantity: item.quantity,
        image: item.image
    }));

    const grandTotal = this.calculateGrandTotal(); 

    this.checkForm.patchValue({ orderItem: orderItemsArray });
    this.checkForm.patchValue({
        user: {
            id: this.userId,
        },
        grantTotal: grandTotal 
    });

    this.api.post('order', this.checkForm.value).subscribe((res) => {
        console.log(res);
        this.cartItemStatusChange();
        this.snackBar.showSuccessMessage("Your Order Successfully Registered");
    });
    }
  })
  }
  openPopup(): void {
    const dialogRef = this.dialog.open(PaymentComponent, {
      width: '550px', height:'650px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The popup was closed');
    });
  }
  cartItemStatusChange() {
    for (const item of this.cartItems) {
      this.api.get('addcart/updateCart/'+ item.id).subscribe((res: any) => {
        console.log(res);
        this.route.navigate(['']);
      });
    }
  }
  }
