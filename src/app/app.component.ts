import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'web_client';

  ngOnInit() {
    let dark: string | null
    if (!((dark = localStorage.getItem('dark')) != null))
      localStorage.setItem('dark', 'false')
    if ((dark = localStorage.getItem('dark')) == 'true')
      document.documentElement.classList.add('dark')
  }

}
