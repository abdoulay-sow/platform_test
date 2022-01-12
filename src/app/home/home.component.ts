import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user: User | null = null;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.user = this.userService.getUser() as User;
  }

}
