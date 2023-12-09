import { Component } from '@angular/core';

@Component({
  selector: 'app-attendence',
  templateUrl: './attendence.component.html',
  styleUrl: './attendence.component.css'
})
export class AttendenceComponent {
  employees= [
    {id:'123', firstname:"aditya", middlename:'abc', lastname:'xyz',present:false},
    {id:'1343', firstname:"adsd", middlename:'asdsds', lastname:'sdsdsxyz',present:false},
  ];
  attendanceDate: string = '';

  // constructor(private employeeService: EmployeeService) {}

  // ngOnInit() {
  //   this.employeeService.getEmployees().subscribe(employees => {
  //     this.employees = employees.map(name => ({ name, present: false }));
  //   });
  // }

  submitAttendance() {
    // Process the attendance data, for now, log it to the console
    const attendanceData = {
      date: this.attendanceDate,
      employees: this.employees
    };
    console.log(attendanceData);
    // You can further send this data to a server for storage or perform other actions
  }
}
