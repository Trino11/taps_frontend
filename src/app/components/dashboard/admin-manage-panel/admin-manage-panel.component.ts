import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-manage-panel',
  templateUrl: './admin-manage-panel.component.html',
  styleUrls: ['./admin-manage-panel.component.css']
})
export class AdminManagePanelComponent implements OnInit {

  public page: string = ""

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.page = this.router.url
  }

}
