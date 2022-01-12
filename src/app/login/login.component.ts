import { Component, OnInit } from '@angular/core';
import { MyErrorStateMatcher } from '../signup/signup.component';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../signup/signup.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('layesow1011@gmail.com', [Validators.required, Validators.email]),
    password: new FormControl('Abc123456', [Validators.required, Validators.minLength(6)])
  })





  matcher = new MyErrorStateMatcher();

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {

  }

  async login() {
    if (this.loginForm.invalid) return
    const data = await this.userService.login(
      this.loginForm.controls['email'].value,
      this.loginForm.controls['password'].value)

    localStorage.setItem('token', data.data.login.token)

    this.userService.setUser({
      id: data.data.login.id,
      user:{
        id: data.data.login.user.id,
        profile: {
          firstname: data.data.login.user.profile.firstName,
          lastname: data.data.login.user.profile.lastName,
          email: data.data.login.user.profile.email,
        },
        isconfirmed: data.data.login.user.isConfirmed,
      }
    })

    this.router.navigate(['login-domain'])
  }

}
