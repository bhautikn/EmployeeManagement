import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { LeaveFormComponent } from './leave-form/leave-form.component';
import { AttendenceComponent } from './attendence/attendence.component';
import { AttendenceSheetComponent } from './attendence-sheet/attendence-sheet.component';
import { EmployeePanelComponent } from './employee-panel/employee-panel.component';
import { EpmNevComponent } from './epm-nev/epm-nev.component';
import { AdminNevComponent } from './admin-nev/admin-nev.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPassComponent,
    AdminComponent,
    EmployeeComponent,
    AddEmployeeComponent,
    LeaveFormComponent,
    AttendenceComponent,
    EpmNevComponent,
    AdminNevComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
