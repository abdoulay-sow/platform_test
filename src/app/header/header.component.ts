import { Component, OnInit } from '@angular/core';
import { MyTranslatorService } from '../my-translator.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  hero = "wisdom"
  constructor(private myTranslator: MyTranslatorService) { }

  ngOnInit(): void {
  }

  changeLang(e: Event) {
    if (!(e && e.target && e.target)) {
      return;
    }
    this.myTranslator.changeLang((e.target as any).value)
  }

}
