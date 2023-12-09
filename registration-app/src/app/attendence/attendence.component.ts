import { Component } from '@angular/core';
import { ApiAttendanceService } from '../api-attendance.service';

@Component({
  selector: 'app-attendence',
  templateUrl: './attendence.component.html',
  styleUrl: './attendence.component.css'
})
export class AttendenceComponent {
  employees:any= [
    // {id:'123', firstName:"aditya", middleName:'abc', lastName:'xyz',present:false},
    // {id:'1343', firstName:"adsd", middleName:'asdsds', lastName:'sdsdsxyz',present:false},
  ];
  attendanceDate: string = '';

  constructor(private _api: ApiAttendanceService) {}

  ngOnInit() {
    // fetch('http://localhost:3000/admin/attandance/').then(res=>{
    //   console.log(res);
    //   res.json()
    // }).
    // then(res=>{
    //   console.log(res);
    // })
    this._api.getAll().subscribe((emp:any) => {
      // console.log(emp);
    var date:any = new Date();
    date = date.getMonth()+'/'+date.getDay()+'/'+date.getFullYear();
      this.employees = emp.map((data:any)=>{
        data.present = false;
        data.date = date;
        console.log(data)
        return data;
      });
      console.log(this.employees)
    });
  }

  submitAttendance() {
    // Process the attendance data, for now, log it to the console
    this._api.sendAttandance(this.employees);
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
