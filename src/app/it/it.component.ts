import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-it',
  template: `
    <h2> it works! </h2>

  `,
  styles: [`
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
export class ItComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
