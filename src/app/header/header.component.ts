import { Component, OnInit } from '@angular/core';
import { MyTranslatorService } from '../my-translator.service';
import { UserService, HeaderType } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  hero = "wisdom"
  isOpen = false;
  

  headerType: HeaderType = "HOME"
  constructor(
    private router: Router,
    private userService: UserService,
    private myTranslator: MyTranslatorService) { }

  ngOnInit(): void {

    this.userService.currentHeader.subscribe((data: HeaderType) => {
      this.headerType = data
    })
  }

  changeLang(e: Event) {
    if (!(e && e.target && e.target)) {
      return;
    }
    this.myTranslator.changeLang((e.target as any).value)
  }

  openPreview() {
    //this.userService.changeHeader('PREVIEW')
    this.router.navigate(['preview'])
  }

  exitPreview() {
    this.userService.changeHeader('LOGGED')
    this.router.navigate(['overview'])
  }

  goToCustomize() {
    this.router.navigate(['customization'])
  }

  logout() {
    this.userService.logout().then((data: any) => {
      if (!data) return;

      localStorage.clear()
      localStorage.setItem('token-edacy', "")

      this.router.navigate(['login'])
    })
  }

}
