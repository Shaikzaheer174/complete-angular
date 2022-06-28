import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  template: `
    <p>eventbinding works!</p>

    <button (click)="onClick()"> click me if u can </button>

   <h1>{{greeting}}</h1>

  `,
  styles: [
  ]
})
export class EventbindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public greeting = "";

  onClick() {
    this.greeting = "congratulations u clicked the button successfully!";
  }
}
