import { Component, OnInit } from '@angular/core';
import { MyErrorStateMatcher } from '../signup/signup.component';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../signup/signup.component.scss']
})
export class LoginComponent implements OnInit {

  
  
  emailFormControl = new FormControl('', [Validators.required, Validators.email])
  passwordFormControl = new FormControl('', [Validators.required, Validators.minLength(6)])
  

  matcher = new MyErrorStateMatcher();

  constructor() { }

  ngOnInit(): void {
  }

}
