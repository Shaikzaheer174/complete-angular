import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  template: `

    <p>pipes works!</p>

    <h1> {{name}}</h1>
<!-- applying pipes      string -->
     <h1> {{name | lowercase}}</h1>
     <h1> {{name | uppercase}}</h1>
     <h1> {{message | titlecase}}</h1>
     <h1> {{name | slice : 3:5 }}</h1>   <!-- it count from three to five but not five-->
     <h2> {{ person | json}}</h2>
  
    <!--number pipe -->
    <h2> {{ 5.678 | number: '1.2-3' }}</h2>    <!-- 1.2-3  ---- 1 indicates the no.of integers in the given number  .2 indicates the minimum no.of integer digits  3 indicates the maximum no.of decimal digits in the given data-->
    <h2> {{ 5.678 | number: '3.4-5' }}</h2>
    <h2> {{ 5.678 | number: '3.1-2' }}</h2>

    <!-- percentage-->
    <h2> {{0.25 | percent}}</h2>

    <!--  currency operator -->
     <h2> {{0.25 | currency  }}</h2>  <!--by default the currency operator is $ -->
    <h2> {{0.25 | currency : 'INR'  }}</h2> <!-- country currency code-->

    <!--date operator -->
    --------------------------
    <h2> {{ date }}</h2>
    <h2> {{ date | date }}</h2>

    <h2> {{ date | date:'short'}}</h2>
    <h2> {{ date | date:'shortDate'}}</h2>
    <h2> {{ date | date:'shortTime'}}</h2>

    <h2> {{ date | date: 'medium' }}</h2>
    <h2> {{ date | date: 'mediumDate' }}</h2>
    <h2> {{ date | date: 'mediumTime' }}</h2>

    <h2> {{ date | date: 'long' }}</h2>
    <h2> {{ date | date: 'longDate' }}</h2>
    <h2> {{ date | date: 'longTime' }}</h2>


  `,
  styles: [
  ]
})
export class PipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public name = "zaheer";
  public message = "this is a pipes concept example";
  // object
  public person = {
    "firstName": "sk",
    "lastName": "zaheer",
  }

  public date = new Date();


}
