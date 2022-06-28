import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employees-list',
  template: `
    <p>
      employees-list works!
    </p>

    <ul *ngFor="let employee of employees">
    <li> {{ employee.name }}</li>
    </ul>
  `,
  styles: [
  ]
})
export class EmployeesListComponent implements OnInit {

  constructor(private _empService: EmployeeService) { }

  ngOnInit(): void { // A function whose declared type is neither 'void' nor 'any' must return a value.  
                    //this function only works once at the time of initailization of the component component.
    this.employees = this._empService.getEmployee();
  }

  public employees: any = [];

}
