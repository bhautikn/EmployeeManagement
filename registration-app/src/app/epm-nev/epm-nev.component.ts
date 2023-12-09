import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-epm-nev',
  templateUrl: './epm-nev.component.html',
  styleUrl: './epm-nev.component.css'
})
export class EpmNevComponent {
  constructor(private _routing:Router){}
  logout(){
    document.cookie = '_id= ; expires = Thu, 01 Jan 1970 00:00:00 GMT'
    document.cookie = '_isAdmin= ; expires = Thu, 01 Jan 1970 00:00:00 GMT'
    this._routing.navigate(['/login']);
    console.log("hello")
  }
}
