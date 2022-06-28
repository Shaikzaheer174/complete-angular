import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students-list',
  template: `
    <p> <b> students-list works! </b> </p>
    <ul *ngFor="let student of students">
    <li> {{ student.name }}</li>
    </ul>
  `,
  styles: [
  ]
})
export class StudentsListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public students = [
    {"id" : 1, "name": "John", "course": "angular"},
    {"id" : 2, "name": "cena", "course": "bootstrap"}
  ];

}
