import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DashboardService } from 'src/app/services/dashboard.service';
import { ModalsService } from 'src/app/services/modals.service';

@Component({
  selector: 'app-subscribe-user-form',
  templateUrl: './subscribe-user-form.component.html',
  styleUrls: ['./subscribe-user-form.component.css']
})
export class SubscribeUserFormComponent implements OnInit {

  @Input()
  public user: any

  public instances: any[] = []
  public sInstances: any[] = []
  public objecto: { 12: "", 32: true } = { 12: "", 32: true }

  constructor(private dashboardService: DashboardService, private modalS: ModalsService) { }

  ngOnInit(): void {
    this.getInstances()
  }

  getInstances() {
    this.dashboardService.getAllAdminInstancesInfo().subscribe(
      res => {
        this.instances = [];
        this.instances = res;
        this.dashboardService.getSubscribedInstancesInfo(this.user.uid).subscribe(
          res => {
            this.sInstances = [];
            this.sInstances = res;
            this.eraseRepeatedInstances()
          },
          err => console.log(err)
        )
      },
      err => console.log(err)
    )

  }

  eraseRepeatedInstances() {
    for (let i = 0; i < this.sInstances.length; i++)
      for (let k = 0; k < this.instances.length; k++)
        if (this.instances[k].id == this.sInstances[i].id)
          this.instances[k].subscribed = true
  }
  updateSubscriptions(form: NgForm) {
    let changes: { sub: any[], desub: any[] } = { sub: [], desub: [] }

    for (let instance of this.instances)
      if (form.value[instance.id] === true)//@ts-ignore
        changes.sub.push(instance.id)
      else if (form.value[instance.id] === false)//@ts-ignore
        changes.desub.push(instance.id)

    if (changes.sub.length != 0)
      for (let instance of changes.sub)
        this.dashboardService.subscribeUser(this.user.uid, instance).subscribe(
          res => this.closeModal(),
          err => console.log(err)
        )
    if (changes.desub.length != 0)
      for (let instance of changes.desub)
        this.dashboardService.desubscribeUser(this.user.uid, instance).subscribe(
          res => this.closeModal(),
          err => console.log(err)
        )

    this.closeModal()
  }

  closeModal() {
    this.modalS.$subscribeUserModal.emit(false)
  }

}
