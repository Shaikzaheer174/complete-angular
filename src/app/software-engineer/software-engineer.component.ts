import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-software-engineer',
  template: `
    <h2> software-engineers</h2>

  `,
  styles: [`
     h2{
      color: grey;
      text-align: center;
      font-size:40px;
      font-family: play;
      font-weight: bold;
     }
  `
  ]
})
export class SoftwareEngineerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
