import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthCheckService {
  apiUrl = "http://localhost:3000/UserLogin"
  constructor(private _http:HttpClient) { }

  auth(data:any){
    return this._http.post(this.apiUrl, data)
  }
}
