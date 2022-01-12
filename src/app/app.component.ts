import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MyTranslatorService } from './my-translator.service';
import { ThemeServiceService } from './theme-service.service';
import { UserService } from './user.service';
import { PlatformService } from './platform.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'edacy-test';

  supportLanguages = ['en', 'fr']

  constructor(
    private router: Router,
    private userService: UserService, 
    private platformService: PlatformService,
    private themeService: ThemeServiceService, private translateService: TranslateService, private myTranslatorService: MyTranslatorService) {



    
    

    this.themeService.savePrimaryColor('#008080')
    this.themeService.saveSecondaryColor('#000000')
    this.translateService.addLangs(this.supportLanguages)
    this.translateService.setDefaultLang('fr')

    const browserlang = this.translateService.getBrowserLang()
    if (browserlang)
      this.translateService.use(browserlang)

    this.myTranslatorService.currentLang.subscribe((lang: string) => {
      
      this.translateService.use(lang)
    })
  }

  async ngOnInit(): Promise<void> {
    
    const token = localStorage.getItem('token')
    if (!token) return;

    
    const session = await this.userService.getSessionByToken(token)

    if (!session) {
      this.router.navigate(['login'])
    }

    this.userService.setUser({
      id: session.id,
      user: {
        id: session.user.id,
        isconfirmed: session.user.isConfirmed,
        profile: {
          firstname: session.user.firstName,
          lastname: session.user.lastName,
          email: session.user.email,
        }
      }
    })

    if (!this.platformService.getPlatform()) {
      //this.router.navigate(['login-domain'])
    }

    console.log('Session => ', session)
  }

  
}
