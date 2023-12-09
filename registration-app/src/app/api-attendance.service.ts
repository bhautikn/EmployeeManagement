import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiAttendanceService {
  apiUrl = "http://localhost:3000/emp/attandance/"
  constructor(private _http:HttpClient) { }
  
  getAll(){
    return this._http.get(this.apiUrl);
  }
  sendAttandance(data:any){
    return this._http.post(this.apiUrl, data);
  }
}
