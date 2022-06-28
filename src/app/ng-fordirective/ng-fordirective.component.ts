import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-fordirective',
  template: `
    <p>ng-fordirective works!</p>

    <!-- used to render list of elements -->
    <div *ngFor="let element of subjects">           <!-- element is a variable -->
    <h1>{{ element}}</h1>
    </div>

------------------------------------------------------------------------------------------------------------------------------------------------------

    <!-- we can also generate index -->
     <div *ngFor="let element of subjects; index as i">
     <h1> {{i}} ---> {{ element}}</h1>
    </div>


    ------------------------------------------------------------------------------------------------------------------------------------------------------
     <!-- we can also check first element -->
     <div *ngFor="let element of subjects; first as f">
     <h1> {{f}} ---> {{ element}}</h1>
    </div>

    ------------------------------------------------------------------------------------------------------------------------------------------------------
     <!-- we can also check last element -->
     <div *ngFor="let element of subjects; last as l">
     <h1> {{l}} ---> {{ element}}</h1>
    </div>

    ------------------------------------------------------------------------------------------------------------------------------------------------------
     <!-- we can also check even element -->
     <div *ngFor="let element of subjects; even as e">
     <h1> {{e}} ---> {{ element}}</h1>
    </div>

    ------------------------------------------------------------------------------------------------------------------------------------------------------
     <!-- we can also check odd element -->
     <div *ngFor="let element of subjects; odd as o">
     <h1> {{o}} ---> {{ element}}</h1>
    </div>
 


  `,
  styles: [
  ]
})
export class NgFordirectiveComponent implements OnInit {

  public subjects = ["HTML", "CSS", "javascript", "python"];
  constructor() { }

  ngOnInit(): void {
  }

}