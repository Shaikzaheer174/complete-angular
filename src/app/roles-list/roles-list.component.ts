import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roles-list',
  template: `
    <h2>roles List</h2>

  `,
  styles: [
    `
    h2{
      color: blue;
      text-align: center;
      font-size:40px;
      font-family: play;
      font-weight: bold;
     }`
  ]
})
export class RolesListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
