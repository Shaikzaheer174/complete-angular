import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-ref-var',
  template: `
    <p>temp-ref-var variable ex: </p>

    <input #name type="text">
    <button (click)="message(name.value)" type="button">submit</button>

    <h2>{{message1}}</h2>
  `,
  styles: [
  ]
})
export class TempRefVArComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public message1:string = "";
  message(name:any){
    this.message1 = name;

  }
}
