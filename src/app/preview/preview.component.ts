import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  constructor(
    
    private userService: UserService) { }

  ngOnInit(): void {
    this.userService.changeHeader('PREVIEW')
  }

  

}
