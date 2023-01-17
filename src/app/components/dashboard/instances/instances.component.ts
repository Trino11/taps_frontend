import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardService } from 'src/app/services/dashboard.service';
import { InstancesService } from 'src/app/services/instances.service';

@Component({
  selector: 'app-instances',
  templateUrl: './instances.component.html',
  styleUrls: ['./instances.component.css']
})
export class InstancesComponent implements OnInit {

  public instances: any[] = []
  public instance: any = { name: 'Loading...' }

  public response: boolean = false

  public page: string = ""

  public userList: string = 'Offline -'
  public serverResponse: string = ''

  constructor(private router: Router, private dashboardService: DashboardService, private instancesService: InstancesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.page = this.router.url
    this.getInstances()
    this.getInstance()
  }

  getInstances() {
    this.dashboardService.getOwnSubscribedInstancesInfo().subscribe(
      res => { this.instances = res; this.response = true },
      err => console.log(err)
    )
  }

  getInstance() {
    let iid = this.activatedRoute.snapshot.paramMap.get('iid')
    if (typeof (iid) === 'string')
      this.dashboardService.getInstanceInfo(iid).subscribe(
        res => { this.instance = res; this.checkStatus() },
        err => console.log(err)
      )
  }

  asd() { }

  start() {
    this.instancesService.start(this.instance.id).subscribe(
      res => { this.serverResponse = res.msg },
      err => console.log(err)
    )
  }

  stop() {
    this.instancesService.stop(this.instance.id).subscribe(
      res => {this.serverResponse = res.msg },
      err => console.log(err)
    )
  }

  restart() {
    this.instancesService.restart(this.instance.id).subscribe(
      res => { this.serverResponse = res.msg },
      err => console.log(err)
    )
  }

  checkStatus() {
    this.instancesService.checkStatus(this.instance.id).subscribe(
      res => { this.userList = res.msg; this.serverResponse = "" },
      err => console.log(err)
    )
  }

}
