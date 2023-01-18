import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenGuard implements CanActivate, CanActivateChild {
  API_URI: string = 'https://localhost:3000/api'

  constructor(private cookieService: CookieService, private router: Router, private http: HttpClient) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.cookieService.check('token')) {
      this.router.navigate(['/login'])
    }
    else {
      this.http.get(this.API_URI+"/manage/login").subscribe(
        res => {},
        err => {
          this.router.navigate(['/login'])
        }
      )
      return true;
    }
    return false
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.cookieService.check('token')) {
      this.router.navigate(['/'])
    }
    else {
      return true;
    }
    return false
  }

}
