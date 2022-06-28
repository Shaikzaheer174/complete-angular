import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <p>child works!</p>

    <h1>{{parent}}</h1>

    <button (click)="fireEvent()"> click me!</button>

  `,
  styles: [
  ]
})
export class ChildComponent implements OnInit {

  @Input('fromParent') public parent:any;

  @Output() public childInfo = new EventEmitter();



  constructor() { }

  ngOnInit(): void {
  }

  fireEvent(){
    this.childInfo.emit("mesg from child to parent");
  }
}
