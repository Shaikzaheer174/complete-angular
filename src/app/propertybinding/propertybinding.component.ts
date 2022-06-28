import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  template: 
  `
    <p><u>propertybinding example!</u></p>
    <p>understand about html attribute and DOM(document object model) property </p>

    <input type="text" value="zaheer"><br/>
    <!-- attribute values doesn't change but value property changed 
    in console: $0.getattribute('value')
                $0.value
    -->


     <!-- property binding was done with square brackets -->
     <input [id]="myid" type="text" value="zaheer"><br/>

     <!--we can done this with interpolation also -->
     <input id="{{myid}}" type="text" value="zaheer"><br/>


      <!-- then y we need property binding means their is a limitation with interpolation that we cannot use boolean values-->
       <!-- ex:-->
       <input disabled id="{{myid}}" type="text" value="zaheer"><br/> <!-- disabled is by default true so with interpolation we cannot make it as false 
        ex: -->
      <input disabled = false  id="{{myid}}" type="text" value="zaheer"><br/> <!--its still true only  -->
      <!-- therefore the solution is property binding
      ex:-->
      <input [disabled]="false"  id="{{myid}}" type="text" value="zaheer"><br/>



      <!-- instead of hardcoding create property in class and use it..-->
      <input [disabled]="isDisabled"  id="{{myid}}" type="text" value="zaheer"><br/>



      <!--we can do alternate instead of using square brackets -->
      <input bind-disabled="isDisabled"  id="{{myid}}" type="text" value="zaheer"><br/>

 
  `,
  styles: 
  [

  ]
})
export class PropertybindingComponent implements OnInit {

  public myid="testId"; //property

  public isDisabled = true;

  constructor() { }
  ngOnInit(): void 
  {
  }


}
