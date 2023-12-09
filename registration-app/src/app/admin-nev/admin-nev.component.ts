import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-nev',
  templateUrl: './admin-nev.component.html',
  styleUrl: './admin-nev.component.css'
})
export class AdminNevComponent {
  constructor(private _router:Router){}
  logout(){
    document.cookie = '_id= ; expires = Thu, 01 Jan 1970 00:00:00 GMT'
    document.cookie = '_isAdmin= ; expires = Thu, 01 Jan 1970 00:00:00 GMT'
    this._router.navigate(['/login']);
  }
}
