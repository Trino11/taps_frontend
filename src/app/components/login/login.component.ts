import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { CookieService } from 'ngx-cookie-service'

import { LoginService } from './../../services/login.service'
import { data } from './../../models/userDataLogin'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private data: data = {
    username: "",
    password: ""
  }

  passFailed: boolean = false

  constructor(private loginService: LoginService, private router: Router, private cookieService: CookieService) { }

  ngOnInit(): void {
  }

  tryLogin(username: HTMLInputElement, password: HTMLInputElement, remme: HTMLInputElement) {
    this.data.username = username.value
    this.data.password = password.value
    let token: string
    this.loginService.tryLogin(this.data).subscribe(
      res => {
        if (res.msg == "user and pass are correct") {
          if (remme.value == "on")
            this.cookieService.set('token', res.token)
          this.router.navigate(['/dashboard'])
        } else if (res.msg == "There was a problem, try again later") {
          this.passFailed = true
          password.value = ""
          username.focus()
        }
      },
      err => {
        this.passFailed = true
        password.value = ""
        username.focus()
      }
    )
    return false;
  }
  

}
