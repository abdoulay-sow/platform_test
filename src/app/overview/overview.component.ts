import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  options: FormGroup;
  activationControl = new FormControl('true');
  constructor(fb: FormBuilder) {
    this.options = fb.group({
      activation: this.activationControl
    })
   }

  ngOnInit(): void {
  }

}
