import { Component } from '@angular/core';

class employee{
  id:string;
  firstName:string;
  middleName:string;
  lastName:string;
  deptartment:any;

  constructor(){
    this.id='';
    this.firstName='';
    this.middleName='';
    this.lastName='';
    this.deptartment=''
  }
}

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  employees:employee[] = [
                {id:'1', firstName:'ronit', middleName:'rajeshbhai', lastName:'kukadiya',deptartment:'IT'},
               {id:'2', firstName:'bhautik', middleName:'rajeshbhai', lastName:'navdariya',deptartment:'IT'},
               {id:'3', firstName:'aditya', middleName:'rajeshbhai', lastName:'vadodariya',deptartment:'IT'},
               {id:'4', firstName:'Ayaz', middleName:'rajeshbhai', lastName:'vakaliya',deptartment:'IT'}
              ];
  tempemployees = "";
  filteredemp :any= [];
  idToEdit = -1;
  searchText = '';

  tempemp = new employee();

  addEmployee(){
    this.employees.push(this.tempemp)
    this.tempemp = new employee();
  }
  moreInfo(id:string){

  }

  deleteEmp(id:any){
    this.employees.splice(id,1);
  }

  setForEdit(id:any){
    this.tempemp = this.employees[id];
    this.idToEdit = id;
  }

  editEmp(){
    this.employees[this.idToEdit] = this.tempemp;
    this.tempemployees = ''
    this.idToEdit = -1;
  }

  searchEmployees(){
    this.filteredemp = this.employees.filter((fac:any)=>{
      return fac.name.indexOf(this.searchText) != -1;
    }) 

    console.log(this.filteredemp)
  }  
}

