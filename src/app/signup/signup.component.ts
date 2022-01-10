import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroupDirective, NgForm, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirm: new FormControl('', [Validators.required]),
    acceptTerms: new FormControl(false, [Validators.required]),
  })

  matcher = new MyErrorStateMatcher();

  constructor(
    private userService: UserService,
    private router: Router
    ) { 
    
  }
  onCheckboxChange($event: Event) {

  }

  ngOnInit(): void {
    console.log(this.userService.getUser())
  }

  saveSignup() {
    console.log('Signup Form => ', this.signupForm)

    //if (!this.signupForm.valid) {
    //  return;
    //}

    this.router.navigate(['set-environment'])
  }

}
