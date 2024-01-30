import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { SnackbarServiceService } from 'src/app/common/snackbarService.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private service: ApiService,
    private snackbar: SnackbarServiceService, private router: Router) { }

  data: any;
  contactForm: FormGroup;

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile_num: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  get name() {
    return this.contactForm.get('name');
  }
  get email() {
    return this.contactForm.get('email');
  }
  get subject() {
    return this.contactForm.get('subject');
  }
  get message() {
    return this.contactForm.get('message');
  }
  get mobile_num() {
    return this.contactForm.get('mobile_num');
  }
  gotoadmin() {
    this.post();
  }

  post() {
    this.service.post("api/contact-us", this.contactForm.value).subscribe((res) => {
      this.data = res;
      console.log("query sended", res);
      this.contactForm.reset();
      this.snackbar.showSuccessMessage("Your Message Send SuccessFully !")
      this.router.navigate(['']);
    });
  }
}
