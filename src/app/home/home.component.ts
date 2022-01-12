import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user: User | null = null;
  constructor(
    private router: Router,
    private userService: UserService) { }

  ngOnInit(): void {
    this.user = this.userService.getUser() as User;
  }

  goCreateProgram() {
    this.router.navigate(['create-program'])
  }

}
