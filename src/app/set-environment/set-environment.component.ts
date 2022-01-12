import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PlatformService } from '../platform.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-set-environment',
  templateUrl: './set-environment.component.html',
  styleUrls: ['./set-environment.component.scss']
})
export class SetEnvironmentComponent implements OnInit {

  environmentForm = new FormGroup({
    domain: new FormControl('', [Validators.required]),
    defaultLanguage: new FormControl('En', [Validators.required])
  })

  constructor(
    private router: Router,
    private platformService: PlatformService) { }

  ngOnInit(): void {
  }

  async save(e: Event) {
    e.preventDefault()

    if (this.environmentForm.invalid) return;

    // Check if domain exist
    const domain = this.environmentForm.controls['domain'].value as string
    const defaultLanguage = this.environmentForm.controls['defaultLanguage'].value as string

    const exist = await this.platformService.isDomainExist(domain)

    if (exist.subDomainExists) {
      this.environmentForm.controls['domain'].setErrors({exist:"Already Exist"})
      this.environmentForm.updateValueAndValidity()
      return;
    }


    const result = await this.platformService.createPlatform(
      domain,
      defaultLanguage)

    if (result) {
      this.router.navigate(['overview'])
    }

  }

}
