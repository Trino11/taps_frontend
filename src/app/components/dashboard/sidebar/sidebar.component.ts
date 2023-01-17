import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { userDataDashboard } from 'src/app/models/userDataDashboard';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input()
  public instances: any


  public userData: userDataDashboard = { uid: 0, username: "", role: [], admin: false }

  constructor(private dashboardService: DashboardService, private cookieService: CookieService, private router: Router) { }

  ngOnInit(): void {
    this.dashboardService.getUserInfo().subscribe(
      res => {
        this.userData = { uid: res.uid, username: res.username, role: res.role, admin: res.admin }
      },
      err => {
      })
  }

  logout() {
    this.cookieService.deleteAll()//TODO:Delete session en backend?
    this.router.navigateByUrl('/')
  }

}
