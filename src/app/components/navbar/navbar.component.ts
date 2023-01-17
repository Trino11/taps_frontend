import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import { StatusService } from './../../services/status.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public status: boolean = true

  public currentUrl: string = ''
  public logged: boolean = false
  public dark: boolean = false

  constructor(private router: Router, private statusService: StatusService, private cookieService: CookieService) {
    this.currentUrl = this.router.url
  }

  ngOnInit(): void {
    this.statusService.getStatus().subscribe(
      res => { if (res) this.status = true },
      err => this.status = false
    )
    this.currentUrl = this.router.url
    this.logged = this.cookieService.check('token')

    
  }

  toggleDarkmode() {
    let dark: string | null
    dark = localStorage.getItem('dark')
    if (dark == 'true') {
      localStorage.setItem('dark', 'false')
      document.documentElement.classList.remove('dark')
      //this.dark = false
    }
    else {
      localStorage.setItem('dark', 'true')
      document.documentElement.classList.add('dark')
      //this.dark = true
    }


  }

}
