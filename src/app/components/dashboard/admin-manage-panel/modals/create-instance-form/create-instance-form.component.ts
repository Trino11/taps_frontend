import { Component, HostBinding, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { ModalsService } from 'src/app/services/modals.service';

@Component({
  selector: 'app-create-instance-form',
  templateUrl: './create-instance-form.component.html',
  styleUrls: ['./create-instance-form.component.css']
})
export class CreateInstanceFormComponent implements OnInit {

  @HostBinding('class') classes = 'row'

  public instance: {
    name: string,
    isAdmin: boolean,
    tag?: string,
    options?: any
  } = { name: "Default", isAdmin: false, tag: "default" }

  constructor(private dashboardService: DashboardService, private modalS: ModalsService) { }

  ngOnInit(): void {
    this.modalS.$optionsInstance.subscribe(
      res => { this.instance.options = res }
    )
  }

  createInstance(name: HTMLInputElement, isAdmin: HTMLInputElement, tag: any) {
    if (tag != 'default' && !this.instance.options)
      alert('You may save your server data before submit, or unselect the tag.')
    else {
      this.instance.name = name.value
      this.instance.isAdmin = isAdmin.checked
      this.instance.tag = tag

      this.dashboardService.createInstance(this.instance).subscribe(
        res => { this.closeModal() },
        err => console.log(err)
      )

    }

  }

  closeModal() {
    this.modalS.$createInstanceModal.emit(false)
  }

}
