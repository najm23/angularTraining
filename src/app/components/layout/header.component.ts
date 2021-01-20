import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  template: `
    <mat-toolbar color="primary">
      <span>header works!</span>
      <span class="spacer"></span>
      <a class="menu-item" routerLink="/user/profile"[routerLinkActive]= "'active'"> Profile </a>
      <a class="menu-item" routerLink="/homme" [routerLinkActive]= "'active'"> Home </a>
      <a class="menu-item" routerLink="/getStarted"[routerLinkActive]= "'active'"> Get Started</a>
    </mat-toolbar>
  `,
 styles: [`
 .bold { font-weight: bolder; color: red; }
 .menu-item { margin: 0 15px; }
 .active { font-weight: bolder; }
 .spacer { flex: 1 1 auto; }
`]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
