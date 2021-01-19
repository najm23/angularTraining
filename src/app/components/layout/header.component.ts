import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  template: `
    <mat-toolbar color="primary">
      <span>header works!</span>
      <span class="spacer"></span>
      <a routerLink="/user/profile"[routerLinkActive]= "'active'"> Profile </a>
      <a routerLink="/homme" [routerLinkActive]= "'active'"> Home </a>
      <a routerLink="/getStarted"[routerLinkActive]= "'active'"> Get Started</a>
    </mat-toolbar>
  `,
  styles: [`.spacer {flex: 1 1 auto;}` ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
