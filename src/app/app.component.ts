import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {    //export used to share class.
  title = 'project1';

  //component interactions with child component.
  public parentMsg = "this is a message from parent/app component to the child component...";


  pageTitle: string = 'my web application';
  // it inclues  
  // properties ---> variables
  // methods    --->  methods

  public msg: any;

}
