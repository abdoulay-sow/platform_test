import { Component, OnInit } from '@angular/core';
import { ColorEvent } from 'ngx-color';

@Component({
  selector: 'app-customization',
  templateUrl: './customization.component.html',
  styleUrls: ['./customization.component.scss']
})
export class CustomizationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  changeComplete($event: ColorEvent) {
    console.log('Event => ', $event)
  }

}
