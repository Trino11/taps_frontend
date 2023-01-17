import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public instances: any[] = []

  public response: boolean = false

  public page: string = ""
  constructor(private router: Router, private dashboardService: DashboardService) { }

  ngOnInit() {
    this.page = this.router.url
    this.getInstances()

  }

  getInstances() {
    this.dashboardService.getOwnSubscribedInstancesInfo().subscribe(
      res => { this.instances = res; this.response = true },
      err => console.log(err)
    )
  }

}
