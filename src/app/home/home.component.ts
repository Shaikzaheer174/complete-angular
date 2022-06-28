import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h2>
      HOME
    </h2>
  `,
  styles: [

    `
    h2{
      color: red;
      text-align: center;
      font-size:40px;
      font-family: play;
      font-weight: bold;
     }
    `
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
