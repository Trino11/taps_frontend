import { Component, Input, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { ModalsService } from 'src/app/services/modals.service';

@Component({
  selector: 'app-update-user-form',
  templateUrl: './update-user-form.component.html',
  styleUrls: ['./update-user-form.component.css']
})
export class UpdateUserFormComponent implements OnInit {

  @Input()
  public user: any

  constructor(private dashboardService: DashboardService, private modalS: ModalsService) { }

  ngOnInit(): void {
  }

  updateUser(username: HTMLInputElement, password:HTMLInputElement) {
    this.dashboardService.updateUser(this.user.uid, username.value, password.value).subscribe(
      res => {
        this.closeModal()
      },
      err => {
        console.log(err);
      }
    )
  }

  closeModal() {
    this.modalS.$updateUserModal.emit(false)
  }
}
