import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <h2>
      Page Not Found - 404 Error!
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
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
