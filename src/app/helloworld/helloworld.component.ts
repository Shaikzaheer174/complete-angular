import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-helloworld',      //if selector is specified as --> '.app-helloworld'  then in app.c.html ----> <div class="app-helloworld"></div>     or         if '[app-helloworld]' then <div app-helloworld></div> 
  templateUrl: './helloworld.component.html',
  styleUrls: ['./helloworld.component.css']
})
export class HelloworldComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
