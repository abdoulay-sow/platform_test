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
    firstName: new FormControl('AZDAZD', [Validators.required]),
    lastName: new FormControl('azazdazd', [Validators.required]),
    email: new FormControl('dazdazda@ezfez.com', [Validators.required, Validators.email]),
    password: new FormControl('Abc123456', [Validators.required, Validators.minLength(6)]),
    confirm: new FormControl('Abc123456', [Validators.required]),
    acceptTerms: new FormControl(true, [Validators.required]),
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
    this.userService.changeHeader('HOME')
  }

  async saveSignup() {
    if (this.signupForm.invalid) return;

    if (this.signupForm.controls['password'].value !== this.signupForm.controls['confirm'].value) {
      this.signupForm.controls['password'].setErrors({diff: "Not Same Password"})
      this.signupForm.updateValueAndValidity()
      return;
    }

    const data = await  this.userService.addUser({
      firstName: this.signupForm.controls['firstName'].value,
      lastName: this.signupForm.controls['lastName'].value,
      email: this.signupForm.controls['email'].value,
      password: this.signupForm.controls['password'].value,
    })

    this.userService.login(this.signupForm.controls['email'].value,
    this.signupForm.controls['password'].value)
    .then((data: any) => {
      console.log('Data => ', data)
      localStorage.setItem('token-edacy', data.data.login.token)
      this.router.navigate(['set-environment'])
    })
    
  }

  

}
