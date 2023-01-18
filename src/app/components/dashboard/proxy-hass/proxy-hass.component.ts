import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-proxy-hass',
  templateUrl: './proxy-hass.component.html',
  styleUrls: ['./proxy-hass.component.css']
})
export class ProxyHassComponent implements OnInit {

  public hassPath:SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.hassPath =  this.sanitizer.bypassSecurityTrustResourceUrl("https://localhost");
  }

  ngOnInit(): void {
  }

}
