import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


import { data } from '../models/userDataLogin';
import { loginResponse } from '../models/loginResponse';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API_URI:string = 'https://localhost:3000/api'

  constructor(private http: HttpClient) { }

  registerUserByToken(token:any, data:any){
    return this.http.post<any>(`${this.API_URI}/recovery/register/${token}`, data)
  }

  tryLogin(data:data):Observable<loginResponse>{
    return this.http.post<loginResponse>(`${this.API_URI}/login`, data)
  }

}
