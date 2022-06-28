import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-twowaybinding',
  template: `
    <p>twowaybinding works!</p>

    <input [(ngModel)]= data type="text">
    <button type="button" > click me </button>
    <br>
    <br>
    <h2>{{data}}</h2>
  `,

  styles: [
  ]
})
export class TwowaybindingComponent implements OnInit {
  public data ="";
  constructor() { }

  ngOnInit(): void {
  }



}
