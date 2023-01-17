import { Component, OnInit } from '@angular/core';
import { userDataDashboard } from 'src/app/models/userDataDashboard';
import { DashboardService } from 'src/app/services/dashboard.service';
import { ModalsService } from 'src/app/services/modals.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  public users: Array<any> = []
  public creatingUser: boolean = false
  public updatingUser: boolean = false
  public subscribingUser: boolean = false

  public newToken: any

  public userW: {} = {}

  constructor(private dashboardService: DashboardService, private modalS: ModalsService) { }

  ngOnInit(): void {
    this.modalS.$createUserModal.subscribe(
      res => { this.creatingUser = res; this.getInfo() }
    )
    this.modalS.$updateUserModal.subscribe(
      res => { this.updatingUser = res; this.getInfo() }
    )
    this.modalS.$subscribeUserModal.subscribe(
      res => { this.subscribingUser = res; this.getInfo() }
    )
    this.getInfo()

  }

  getInfo() {
    this.users = []
    this.dashboardService.getAllUsersInfo().subscribe(
      res => {
        let f: boolean = true
        let i = 0
        for (let user of res) {
          for (i = 0; i < this.users.length; i++)
            if (user.uid == this.users[i].uid) {
              this.users[i].role.push(user.role);
              f = false
            }
          if (f) {
            if (typeof (user.role) == 'string')
              user.role = [user.role]
            this.users.push(user)
          }
          f = true
        }
      },
      err => {
        console.error(err);
      })
  }

  copyToClipboard(toCopy:string){
    navigator.clipboard.writeText(toCopy)
  }

  generateToken() {
    this.dashboardService.getNewToken().subscribe(
      res => {this.newToken = res.token; this.getInfo()},
      err => console.log(err)
    )
  }

  activateModalCreatingUser() {
    this.creatingUser = true
  }

  activateModalUpdatingUser(user: any) {
    this.userW = user
    this.updatingUser = true
  }

  activateModalSubscribingUser(user: any) {
    this.userW = user
    this.subscribingUser = true
  }

  deleteUser(user: any) {
    let resp: string | null = prompt(`You are going to delete ${user.uid}, ${user.username}. Type CONFIRM.`)
    if (resp == "CONFIRM") {
      this.dashboardService.deleteUser(user.uid).subscribe(
        res => { alert('User deleted.'); this.users = []; this.getInfo() },
        err => { console.log(err) }
      )
    }
    else {
      alert('Delete canceled.')
    }
  }
}
