import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  getEmployee() {
    return [
      { "id": 1, "name": "ben smith", "designation": "developer" },
      { "id": 2, "name": "paul", "designation": "tester" }
    ]
  }

  constructor() { }

}
