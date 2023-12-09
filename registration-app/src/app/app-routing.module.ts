import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { LeaveFormComponent } from './leave-form/leave-form.component';
import { AttendenceComponent } from './attendence/attendence.component';
import { EmpInfoComponent } from './emp-info/emp-info.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'forgot-pass', component:ForgotPassComponent},
  {path:'admin', component:AdminComponent},
  {path:'admin/employees', component:EmployeeComponent},
  {path:'employees/leave-form', component:LeaveFormComponent},
  {path:'admin/attendance', component:AttendenceComponent},
  {path:'admin/add-emp', component:AddEmployeeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
