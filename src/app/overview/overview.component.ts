import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  options: FormGroup;
  activationControl = new FormControl(true);
  constructor(private router: Router,fb: FormBuilder) {
    this.options = fb.group({
      activation: this.activationControl
    })
   }

  ngOnInit(): void {
  }

  goCreateProgram() {
    this.router.navigate(['create-program'])
  }

}
