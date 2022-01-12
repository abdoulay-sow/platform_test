import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PlatformService } from '../platform.service';
import { Router } from '@angular/router';
import { ThemeServiceService } from '../theme-service.service';

@Component({
  selector: 'app-login-domain',
  templateUrl: './login-domain.component.html',
  styleUrls: ['../set-environment/set-environment.component.scss']
})
export class LoginDomainComponent implements OnInit {

  loginDomainForm: FormGroup = new FormGroup({
    domain: new FormControl('', [Validators.required])
  })

  constructor(
    private router: Router,
    private platformService: PlatformService,
    private themeService: ThemeServiceService) { }

  ngOnInit(): void {
  }

  async submit() {
    
    if (this.loginDomainForm.invalid) return;
    
    const domain = this.loginDomainForm.controls['domain'].value
    
    const platform = await this.platformService.isMyDomainExist(domain)
    

    if (platform) {
      const data = platform.fetchMyPlatform;
      this.platformService.setPlatform({
        defaultLanguage: data.defaultLanguage,
        subdomain: data.subdomain,
        source: data.source,
        theme: {...data.theme}
      })
      if (data.theme) {
        if (data.theme.primaryColor) {
          this.themeService.savePrimaryColor(data.theme.primaryColor)
        }
        if (data.theme.secondaryColor) {
          this.themeService.savePrimaryColor(data.theme.secondaryColor)
        }
      }
      this.router.navigate(['overview'])
    } else {
      this.loginDomainForm.controls['domain'].setErrors({exist: "Do you forget"})
      this.loginDomainForm.updateValueAndValidity()
    }
  }

}
