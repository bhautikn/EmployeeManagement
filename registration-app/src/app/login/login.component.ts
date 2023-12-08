import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthCheckService } from '../auth-check.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private _api:AuthCheckService, private _router:Router){}
  form = new FormGroup({
    UserName: new FormControl('', Validators.required),
    Password: new FormControl('', Validators.required),
    RMe: new FormControl('')
  })
  wrongAttempt = false;
  checkLogin(){
    this._api.auth(this.form.value).subscribe((res:any)=>{ //call api
      console.log(res);

      if(res.login){ // if login = true in res
        if(this.form.value.RMe){ //if remember me checked in login form
          var now = new Date();
          var time = now.getTime();
          var expireTime = time + 1000*36000*30;
          now.setTime(expireTime);
          document.cookie = '_id = '+res.id+'; expires='+now.toUTCString()+';path=/';
          document.cookie = '_isAdmin = '+res.isAdmin+'; expires='+now.toUTCString()+';path=/';
          console.log(res.id);
        }

        else{ //if remember me not checked in login form
          document.cookie = '_id = '+res._id;
          document.cookie = '_isAdmin = '+res.isadmin;
        }
        this._router.navigate(['/admin'])
      }
      else{ // if not login in res
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Wrong UserName or Password!",
        });
      }
    })
  }
}
