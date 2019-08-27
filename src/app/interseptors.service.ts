import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpRequest, HttpInterceptor } from '@angular/common/http'
import { Observable } from 'rxjs';
import { AuthService } from './auth.service'
@Injectable({
  providedIn: 'root'
})
export class InterseptorsService implements HttpInterceptor {
  constructor(private auth: AuthService) { }
  intercept(reguest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    reguest = reguest.clone({
      setHeaders: {
        Authorization: `Bearer ${this.auth.getToken()}`
      }
    })
    return next.handle(reguest)
  }
}
