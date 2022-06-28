import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classbinding',
  template: `
    <p>
      classbinding examples!
    </p>


    <!-- 
    note:
    -----
    in css to define class we use  .classname{
      attributes:value;
    }        
    -->

    <h2>class binding </h2>

    <!--to apply class for element -->
    <h2 class="TextColor">class binding </h2>

    <!-- class binding-->
    <h2 [class]="mytext">class binding </h2>

    <!--depending on condition -->
    <h2 [class.TextColor]="required">class binding </h2>


    <!-- mutliple class binding   with the help of "ngclass" it is a custom directive provided by angular. -->
    <h2 [ngClass] = "Group" >class binding </h2>

  `,
  styles: [
    `
    h2{
      text-align:center;
      font-size:30px;
    }

    /*
     writing class in css.
    */

     .TextColor{
      color: green;
     }

     .TextSize{
      font-size: 100px;
     }

     .TextStyle{ 
      font-style: italic;
     }

    `
  ]
})
export class ClassbindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public mytext = 'TextColor';
  public required = true;

  public Group ={
    "TextColor" : this.required,
    "TextSize"  : this.required,
    "TextStyle" : this.required, 
  }


}
