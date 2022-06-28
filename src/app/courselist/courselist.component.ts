import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-courselist',
  template: `
    <h1>Course List👇</h1>
    <ul class="items">
    <li (click)="onSelect(x)" [class.selected]="isSelected(x)"  *ngFor="let x of course">
       <span class="badge">{{ x.id }}</span> {{x.name }}
    </li>
    </ul>

  `,
  styles: [
    ` 
h1 {
    padding: 0;
    margin: 0;
    font-family: play;
    font-size: 50px;
    font-weight: bold;
    text-align: center;
    color: black;
}

/* Navigation link styles */
li {
    padding: 15px 20px;
    text-decoration: none;
    margin-top: 10px;
    display: inline-block;
    background-color: #eee;
    border-radius: 4px;
    margin-left: 20px;
}

nav a:visited,
li:link {
    color: #3643b6;
}

li:hover {
    color: #fff;
    background-color: #3643b6;
}

 li.active {
    color: #3643b6;
    background-color: #49ce0c;
}
li.selected{
  background-color: yellow;
}
    `
  ]
})
export class CourselistComponent implements OnInit {

  constructor(private _router: Router, private _activatedRoute: ActivatedRoute) { }  //we have to use router service 

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe((params: ParamMap) => {
      let id = Number(params.get('id'));
      this.selectedId = id
    })
  }
  
  public selectedId:any;

  public course = [
  {"id":1, "name": "Angular"},
  {"id":2, "name": "React"},
  {"id":3, "name": "Vue"},
  {"id":4, "name": "Bootstrap"},
  {"id":5, "name": "MongoDB"},
  ];

  onSelect(x:any){
    //this._router.navigate(['/course', x.id]); //linkparameters array   ----> this is absolute navigation
    this._router.navigate([x.id], { relativeTo: this._activatedRoute }) // navigate()--> to construct url   //we are appending id to current routr --> {relativeTo: this._activatedRoute}
  }

  isSelected(x:any){
    return x.id === this.selectedId;

  }
}
