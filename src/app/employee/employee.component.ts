import { Component } from '@angular/core';
import { Employee } from 'src/employee';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  employeeList: Employee[] = [
    { id: 1, firstname: 'xyz', lastname: 'xyz', salary: 10000, dob: 'xyz', email: 'xyz', action: 'xyz'},
    { id: 2, firstname: 'xyz', lastname: 'xyz', salary: 10000, dob: 'xyz', email: 'xyz', action: 'xyz'},
    { id: 3, firstname: 'xyz', lastname: 'xyz', salary: 10000, dob: 'xyz', email: 'xyz', action: 'xyz'},
    { id: 4, firstname: 'xyz', lastname: 'xyz', salary: 10000, dob: 'xyz', email: 'xyz', action: 'xyz'},
    { id: 5, firstname: 'xyz', lastname: 'xyz', salary: 10000, dob: 'xyz', email: 'xyz', action: 'xyz'},
    { id: 6, firstname: 'xyz', lastname: 'xyz', salary: 10000, dob: 'xyz', email: 'xyz', action: 'xyz'}
    
  ];
  showEdit: boolean = false;

  editingEmployee: Employee = {} as Employee; // Initialize editingEmployee as an empty object

  EditEmp(employee: Employee) {
    this.showEdit = true;
    this.editingEmployee = { ...employee };
  }

  UpdateEmp() {
    this.showEdit = false;
    // Updating
    const index = this.employeeList.findIndex(emp => emp.id === this.editingEmployee.id);
    if (index !== -1) {
      this.employeeList[index] = { ...this.editingEmployee };
      this.employeeList = [...this.employeeList]
    }

    // Clear the editingEmployee object
    this.editingEmployee = {} as Employee;
  }
}

