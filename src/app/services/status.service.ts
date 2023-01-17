import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  API_URI:string = 'https://localhost:3000/api'

  constructor(private http: HttpClient) { }
  
  getStatus(){ return this.http.get(`${this.API_URI}/status`) }
}
