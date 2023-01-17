import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { ModalsService } from 'src/app/services/modals.service';

@Component({
  selector: 'app-admin-instances',
  templateUrl: './admin-instances.component.html',
  styleUrls: ['./admin-instances.component.css']
})
export class AdminInstancesComponent implements OnInit {

  public creatingInstance: boolean = false
  public updatingInstance: boolean = false

  public instanceW:{} = {}

  public instances: any[] = []

  constructor(private dashboardService: DashboardService, private modalS: ModalsService) { }

  ngOnInit(): void {
    this.modalS.$createInstanceModal.subscribe(
      res => {this.creatingInstance = res; this.getInfo()}
    )
    this.modalS.$updateInstanceModal.subscribe(
      res => {this.updatingInstance = res; this.getInfo()}
    )
    this.getInfo()
  }

  getInfo() {
    this.instances = []
    this.dashboardService.getAllAdminInstancesInfo().subscribe(
      res => { this.instances = res; },
      err => console.log(err)
    )
  }
  
  activateModalCreatingInstance() {
    this.creatingInstance = true
  }

  activateModalUpdatingInstance(instance:any) {
    this.instanceW = instance
    this.updatingInstance = true
  }

  deleteInstance(iid: string, name: string, tag: string) {
    let resp: string | null = prompt(`You are going to delete id:${iid}, ${name}, -${tag}. Type CONFIRM.`)
    if (resp == "CONFIRM") {
      this.dashboardService.deleteInstance(iid).subscribe(
        res => { this.instances = []; this.getInfo() },
        err => console.log(err)
      )
    }
    else {
      alert('Delete canceled.')
    }
  }
}
