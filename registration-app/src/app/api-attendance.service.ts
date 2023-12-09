import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiAttendanceService {
  apiUrl = "http://localhost:3000/admin/attandance/";
  constructor(private _http:HttpClient) { }
  
  headers = new HttpHeaders({'Coockie':document.cookie});
  
  getAll(){
    return this._http.get(this.apiUrl, { headers: this.headers });
  }
  sendAttandance(data:any){
    return this._http.post(this.apiUrl, data, { headers: this.headers }).subscribe();
  }
}
