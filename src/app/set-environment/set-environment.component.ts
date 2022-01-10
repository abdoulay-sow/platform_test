import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-set-environment',
  templateUrl: './set-environment.component.html',
  styleUrls: ['./set-environment.component.scss']
})
export class SetEnvironmentComponent implements OnInit {

  environmentForm = new FormGroup({
    domain: new FormControl('', [Validators.required]),
    defaultLanguage: new FormControl('english', [Validators.required])
  })

  constructor() { }

  ngOnInit(): void {
  }

  save(e: Event) {
    e.preventDefault()
    console.log('Environment Form => ', this.environmentForm)
  }

}
