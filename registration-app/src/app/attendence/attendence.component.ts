import { Component } from '@angular/core';

@Component({
  selector: 'app-attendence',
  templateUrl: './attendence.component.html',
  styleUrl: './attendence.component.css'
})
export class AttendenceComponent {
  employees= [
    {id:'123', firstName:"aditya", middleName:'abc', lastName:'xyz',present:false},
    {id:'1343', firstName:"adsd", middleName:'asdsds', lastName:'sdsdsxyz',present:false},
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
  filteredemp:any = [];
  searchText = '';
  display = false;

  searchEmployees(){
    this.filteredemp = this.employees.filter((fac:any)=>{
      return fac.firstName.indexOf(this.searchText) != -1;
    })
  }
  displaySearch(){
    let search:any = document.getElementById('search-box');
    search.style.display = 'block';
    search.focus();
    this.display = true;
  }
  hideSearch(){
    let search:any = document.getElementById('search-box');
    search.style.display = 'none';
    this.display = false;
  }
}
