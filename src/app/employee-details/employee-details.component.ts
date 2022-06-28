import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  template:
    `
    <p>
      employee-details works!
    </p>

    <ul *ngFor="let employee of employees">
    <li>{{employee.id}} -- {{ employee.name }} -- {{employee.designation}}</li>
    </ul>

  `,
  styles: []
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private _empService: EmployeeService) { }

  ngOnInit(): void {
    this.employees = this._empService.getEmployee();
  }

  public employees: any = [];

}
