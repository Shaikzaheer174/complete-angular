import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <p>test works interpolation ex</p>
    <h1> my name is {{name}} </h1>
    <p> {{"concatinating string with interpolation : " +name}}</p>
    <p> {{"interpolation properties: length of string is = " +name.length}}</p>
    <p> {{"methods to interpolation: to uppercase : " +name.toUpperCase()}}</p>
  
    <!-- interpolation using methods from class-->
    <p> {{"using methods from class ------>"+username()}}</p>
    <p> {{"my site url --> "+myurl}}</p>   

  `,
  styles: [
    `p{
      text-align: left;
      font-size:30px;
      color:blue;
      }
    h1{
      color:red;
      font-size:30px;
      }`
  ]
})
export class TestComponent implements OnInit 
{
  public name="zaheer";
  
  // we can not use global varaibales directly so we assign it to varaibale
  public myurl = window.location.href;

  constructor() { }

  ngOnInit(): void {
  }
  
  username(){
    return this.name;
  }
}
