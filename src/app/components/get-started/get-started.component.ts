import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss']
})
export class GetStartedComponent implements OnInit {

  name = 'Najmeddine';
  today = new Date();
  imgUrl = 'https://via.placeholder.com/150'
  logoColor = 'black';
  isDisable = true;
  fruits = ['orange', 'banana', 'lemon']



  constructor() { }

  ngOnInit(): void {

  }

  clickMe(): void{
    console.log('button clicked');
  }

  toggleState(): void{
    this.isDisable = !this.isDisable;
  }

}
