import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {
  constructor(private _router: Router) { }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (localStorage.getItem('login_check') != null) {
      return true;
    }
    else {
      // this._router.navigateByUrl('/user-login-securly');
      alert('Your are not authorized !!')
      return false;
    }
  }
  public getToken(): string {
    return localStorage.getItem('token')
  }
  public isAthorized(): string {
    const token = this.getToken();
    return token;
  }
}