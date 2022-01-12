import { Component, OnInit } from '@angular/core';
import { ColorEvent } from 'ngx-color';
import { ThemeServiceService } from '../theme-service.service';
import { PlatformService, Platform } from '../platform.service';



@Component({
  selector: 'app-customization',
  templateUrl: './customization.component.html',
  styleUrls: ['./customization.component.scss']
})
export class CustomizationComponent implements OnInit {

  primaryColor = ""
  secondaryColor = ""

  oldDomain: string = ""
  domain: string = "";
  domainError = ""

  

  constructor(
    private platformService: PlatformService,
    private themeService: ThemeServiceService) {
      this.domain = (this.platformService.getPlatform() as Platform) ? 
      (this.platformService.getPlatform() as Platform).subdomain : "test"
      this.oldDomain = this.domain
  }

  ngOnInit(): void {
    const platform: Platform = this.platformService.getPlatform() as Platform

    if (platform && platform.theme) {
      if (platform.theme)
        this.primaryColor = platform.theme.primaryColor || "#008080"
        this.secondaryColor = platform.theme.secondaryColor || "#000000"
    }
  }

  

  changePrimaryComplete($event: ColorEvent) {
    this.primaryColor = $event.color.hex
    //this.themeService.savePrimaryColor($event.color.hex)
  }

  changeSecondaryComplete($event: ColorEvent) {
    this.secondaryColor = $event.color.hex
    //this.themeService.saveSecondaryColor($event.color.hex)
  }

  async submitDomain() {
    const exist = await this.platformService.isDomainExist(this.domain)

    if (exist.subDomainExists) {
      this.domainError = "Already exist"
      return;
    }
    if (!this.oldDomain || !this.domain) return;
    this.platformService.saveDomain(this.oldDomain, this.domain)
    this.platformService.setPlatform({
      ...(this.platformService.getPlatform() as Platform),
      subdomain: this.domain
    })
    this.oldDomain = this.domain
  }

  async saveTheme() {
    const data = await this.platformService.saveTheme(this.oldDomain, this.primaryColor, this.secondaryColor)

    if (data) {
     this.themeService.savePrimaryColor(this.primaryColor)
     this.themeService.saveSecondaryColor(this.secondaryColor)
    }
  }

}




