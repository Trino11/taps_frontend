import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { ModalsService } from 'src/app/services/modals.service';

@Component({
  selector: 'app-create-user-form',
  templateUrl: './create-user-form.component.html',
  styleUrls: ['./create-user-form.component.css']
})
export class CreateUserFormComponent implements OnInit {

  public passNotMatch: boolean = true

  constructor(private dashboardService: DashboardService, private modalS: ModalsService) { }

  ngOnInit(): void {

  }

  createUser(username: HTMLInputElement, password: HTMLInputElement, passwordR: HTMLInputElement) {
    if (password.value != passwordR.value)
      this.passNotMatch = false
    this.dashboardService.createUser(username.value, password.value).subscribe(
      res => {
        this.closeModal()
      },
      err => {
        console.log(err);
      }
    )
  }

  closeModal() {
    this.modalS.$createUserModal.emit(false)
  }
}
