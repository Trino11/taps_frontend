import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstancesService {

  API_URI: string = 'https://localhost:3000/api'

  constructor(private http: HttpClient) { }

  start(iid:string):Observable<any>{
    return this.http.get<any>(`${this.API_URI}/actions/start/${iid}`)
  }

  stop(iid:string):Observable<any>{
    return this.http.get<any>(`${this.API_URI}/actions/stop/${iid}`)
  }

  restart(iid:string):Observable<any>{
    return this.http.get<any>(`${this.API_URI}/actions/restart/${iid}`)
  }
  
  checkStatus(iid:string):Observable<any>{
    return this.http.get<any>(`${this.API_URI}/actions/checkStatus/${iid}`)
  }

}
