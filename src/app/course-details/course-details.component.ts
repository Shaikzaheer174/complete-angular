import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-course-details',
  template: `
    <h2>Course Details</h2>

    <h1> you are selected the course with Id = {{courseId}} </h1>

    <nav>
    <a (click)="toPrevious()"> Previous</a>
    <a (click)="toNext()"> Next </a>
    <a (click)="goBack()"> Back </a>
    </nav> 

    <nav>
    <a (click)="showDuration()"> Course Duration </a>   <!-- <a> is a anchor tag -->
    <a (click)="showFee()"> Fee Structure </a>
    </nav>

    <router-outlet></router-outlet>
  `,
  styles: [`
  h2{
      color: yellow;
      text-align: center;
      font-size:40px;
      font-family: play;
      font-weight: bold;
     }

  h1 {
    padding: 0;
    margin: 0;
    font-family: play;
    font-size: 50px;
    font-weight: bold;
    text-align: center;
    color: red;
}

/* Navigation link styles */
nav a {
    padding: 15px 20px;
    text-decoration: none;
    margin-top: 10px;
    display: inline-block;
    background-color: #eee;
    border-radius: 4px;
    margin-left: 20px;
}

nav a:visited,
a:link {
    color: #3643b6;
}

nav a:hover {
    color: #fff;
    background-color: #3643b6;
}

nav a.active {
    color: #3643b6;
    background-color: #49ce0c;
}
  `
  ]
})
export class CourseDetailsComponent implements OnInit {
  public courseId: any;
  constructor(private _activatedRoute: ActivatedRoute, private _router: Router) { }

  ngOnInit() {  //the url id atlast will be string type so we parsed as integer so parseInt() 
    //let cId = this._activatedRoute.snapshot.paramMap.get('id');   // paramMap helps read or  to get the parameter from the url
    //this.courseId =cId;
    //due to some drawback we cant use above method code

    this._activatedRoute.paramMap.subscribe((params: ParamMap) => {
      let id = Number(params.get('id'));
      this.courseId = id
    })//parammap will return obervable and we need to capture. for that we have to subscribe().

  }

  toPrevious() {
    let PreviousId = this.courseId - 1;
    this._router.navigate(['/course-list', PreviousId]); //previousid is a placeholder.
  }

  toNext() {
    let NextId = this.courseId + 1;
    this._router.navigate(['/course-list', NextId]);
  }

  goBack() {
    let selectedId = this.courseId ? this.courseId : null; //if course id exists then course else null  
    //this._router.navigate(['/course', { id: selectedId }])  //optonal parameter taken as object {}   //absolute navigation
    this._router.navigate(['../', { id: selectedId }], { relativeTo: this._activatedRoute })  //  ../ ---> on step back
  }

  showDuration(){
    this._router.navigate(['duration'], { relativeTo: this._activatedRoute});
  }

  showFee(){
    this._router.navigate(['fee'], { relativeTo: this._activatedRoute });
  }

}
