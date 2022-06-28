import { Component, OnInit } from '@angular/core';
import { MyhobbiesService } from '../myhobbies.service';

@Component({
  selector: 'app-myhobbies',
  templateUrl: './myhobbies.component.html',
  styleUrls: ['./myhobbies.component.css']
})
export class MyhobbiesComponent implements OnInit {

  constructor(private _hobby: MyhobbiesService) { }

  ngOnInit(): void {

    // the  code is as expected as 
    // subscribe(data){
    // student=data
    // }  this was return i one line in below line.
    this._hobby.gethobby().subscribe(data=> this.myhobbies = data,
                                    error => this.errmsg = error );
  }
  
  public myhobbies:any =[];
  public errmsg:any;
}
