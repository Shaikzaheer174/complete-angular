import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  template: `
    <p>stylebinding examples!</p>


    <h2 [style.color] = "'blue'"> style binding</h2>

    <!-- property binding -->
    <h2 [style.color] = "myColor"> style binding</h2>


    <!--conditional statement -->
    <h2 [style.color] = "required ? 'green' : 'red' "> style binding </h2>

      <!--multiple styles -->
      <h2 [ngStyle]="mystyles"> style binding </h2>
  `,
  styles: [
  ]
})
export class StylebindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
// properties
  public myColor = "pink";
  public required = true;

  //object
  public mystyles = {
    color : "green",
    fontStyle : "italic",
    fontSize :"50px" 
  }

}
