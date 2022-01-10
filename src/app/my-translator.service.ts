import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MyTranslatorService {

  private langSource = new BehaviorSubject('default message');
  currentLang = this.langSource.asObservable();

  constructor() { }

  changeLang(message: string) {
    this.langSource.next(message)
  }
}
