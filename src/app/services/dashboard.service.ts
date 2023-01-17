import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userDataDashboard } from '../models/userDataDashboard';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  API_URI: string = 'https://localhost:3000/api'

  constructor(private http: HttpClient) { }

  getUserInfo():Observable<userDataDashboard>{
    return this.http.get<userDataDashboard>(`${this.API_URI}/manage/user/info`)
  }

  getAllUsersInfo():Observable<userDataDashboard[]>{
    return this.http.get<userDataDashboard[]>(`${this.API_URI}/manage/user/all`)
  }
  
  getNewToken():Observable<any>{
    return this.http.get<any>(`${this.API_URI}/manage/user/addToken`)
  }

  deleteUser(uid: number):Observable<any> {
    return this.http.delete(`${this.API_URI}/manage/user/delete/${uid}`)
  }

  createUser(username: string, password: string):Observable<any> {
    return this.http.post(`${this.API_URI}/manage/user/add`, { username: username, password: password })
  }
  
  updateUser(uid:number, username: string, password:string):Observable<any> {
    return this.http.put(`${this.API_URI}/manage/user/update/${uid}`, { username: username, password: password})
  }

  subscribeUser(uid:string, iid:string):Observable<any> {
    return this.http.post(`${this.API_URI}/manage/instance/subscribe/${iid}/${uid}`, {})
  }
  
  desubscribeUser(uid:string, iid:string):Observable<any> {
    return this.http.delete(`${this.API_URI}/manage/instance/subscribe/${iid}/${uid}`)
  }

  getAllAdminInstancesInfo():Observable<any[]>{
    return this.http.get<any[]>(`${this.API_URI}/manage/instance/admin/all`)
  }
  
  getSubscribedInstancesInfo(uid:number):Observable<any[]>{
    return this.http.get<any[]>(`${this.API_URI}/manage/instance/allSubscribed/${uid}`)
  }
    
  getOwnSubscribedInstancesInfo():Observable<any[]>{
    return this.http.get<any[]>(`${this.API_URI}/manage/instance/allSubscribed`)
  }
  
  getInstanceInfo(iid:string):Observable<any[]>{
    return this.http.get<any[]>(`${this.API_URI}/manage/instance/info/${iid}`)
  }
    
  deleteInstance(iid:string):Observable<any[]>{
    return this.http.delete<any[]>(`${this.API_URI}/manage/instance/delete/${iid}`)
  }

  createInstance(data:any):Observable<any> {
    return this.http.post(`${this.API_URI}/manage/instance/create`, data)
  }
    
  getMinecraftVanillaVersions():Observable<any>{
    return this.http.get<any[]>(`${this.API_URI}/utils/minecraftVersions`)
  }
    
  getMinecraftFabricVersions():Observable<any>{
    return this.http.get<any[]>(`https://meta.fabricmc.net/v2/versions/game`)
  }

}
