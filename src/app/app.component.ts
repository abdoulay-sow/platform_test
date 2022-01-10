import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MyTranslatorService } from './my-translator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'edacy-test';


  supportLanguages = ['en', 'fr']

  constructor(private translateService: TranslateService, private myTranslatorService: MyTranslatorService) {
    this.translateService.addLangs(this.supportLanguages)
    this.translateService.setDefaultLang('fr')

    const browserlang = this.translateService.getBrowserLang()
    if (browserlang)
      this.translateService.use(browserlang)

    this.myTranslatorService.currentLang.subscribe((lang: string) => {
      
      this.translateService.use(lang)
    })
  }

  
}
