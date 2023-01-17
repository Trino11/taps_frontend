import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-create-user-by-token',
  templateUrl: './create-user-by-token.component.html',
  styleUrls: ['./create-user-by-token.component.css']
})
export class CreateUserByTokenComponent implements OnInit {

  private token: any

  public passNotMatch: boolean = false
  public nameShort: boolean = false

  public manualToken: boolean = false

  constructor(private route: ActivatedRoute, private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
    this.token = this.route.snapshot.paramMap.get('token');
  }

  createUser(username: HTMLInputElement, password: HTMLInputElement, rPassword: HTMLInputElement, manualToken: HTMLInputElement) {
    if (username.value.length < 4)
      this.nameShort = true
    else this.nameShort = false
    if (password.value != rPassword.value)
      this.passNotMatch = true
    else this.passNotMatch = false
    if (manualToken.value.length > 10)
      this.token = manualToken.value

    if (!this.passNotMatch && !this.nameShort) {
      this.loginService.registerUserByToken(this.token, { username: username.value, password: password.value }).subscribe(
        res => { this.router.navigateByUrl('/') },
        err => {
          console.log(err)
          this.manualToken = true
        }
      )
    }
  }

}
