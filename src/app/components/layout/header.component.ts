import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  template: `
    <mat-toolbar color="primary">
      <span class="">
        {{headerTitle}}
      </span>
      <span class="spacer"></span>

      <span>
        <a class="menu-item" routerLink="/user/profile"[routerLinkActive]= "'active'"> Profile </a>
        <a class="menu-item" routerLink="/homme" [routerLinkActive]= "'active'"> Home </a>
        <a class="menu-item" routerLink="/getStarted"[routerLinkActive]= "'active'"> Get Started</a>
      </span>
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
  @Input() headerTitle = '';

  constructor() { }

  ngOnInit(): void {
    console.log(this.headerTitle);
    this.headerTitle = 'Something';
  }

}
