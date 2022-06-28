import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-ifdirective',
  template: `
    <p>ng-ifdirective works!</p>


    <!-- normal -->
    <h1>welcome mr . {{name}} </h1>

    <br>

    <!--with condition -->
    <h1 *ngIf="true">welcome mr . {{name}} </h1>

    <br>

    <!--with condition and dynamic -->
    <h1 *ngIf="status">welcome mr . {{name}} </h1>
    
    <br>

    <!-- with if else condition-->
    <h1 *ngIf ="status; else elseblock">welcome mr . {{name}} </h1>

    <ng-template  #elseblock>
    <h1>unknown person</h1>
    </ng-template>

    <br>

    <h1 *ngIf = "status; then trueblock else falseblock"> </h1>

    <ng-template #trueblock>
    <h1> this is a truely true block</h1>
    </ng-template>

    <ng-template #falseblock>
    <h1> this is a false block</h1>
    </ng-template>


  `,
  styles: [
  ]
})
export class NgIfdirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public name: string = "zaheer";
  public status = true;

}
