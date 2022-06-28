import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-details',
  template: `
    <p><b>
      student-details works!
    </b></p>

    <ul *ngFor="let student of students">
    <li> {{student.id}} - {{ student.name }} - {{student.course }}</li>
    </ul> 
  `,
  styles: [
  ]
})
export class StudentDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public students = [
    { "id": 1, "name": "John", "course": "angular" },
    { "id": 2, "name": "cena", "course": "bootstrap" }
  ];

  // we already have studentsdata in the student list component and here in this component again we are using by copy paste the list and this type of copy paste will occurs redundancy of data so we use services. 
}
