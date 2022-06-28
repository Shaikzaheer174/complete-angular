import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switchdirective',
  template: `
    <p>ng-switchdirective works!</p>

    <div [ngSwitch]="mychoice"> 
      <div class="switchCase">

      <div *ngSwitchCase = "'one'">
      <h1>one</h1>
      </div>

      <div *ngSwitchCase = "'two'">
      <h1>two</h1>
      </div>

      <div *ngSwitchCase = "'three'">
      <h1>three</h1>
      </div>

      <div *ngSwitchDefault>
      <h1>invalid!</h1>
      </div>

      </div>
    </div>


  `,
  styles: [
  ]
})
export class NgSwitchdirectiveComponent implements OnInit {
  public mychoice="three";

  constructor() { }

  ngOnInit(): void {
  }

}
