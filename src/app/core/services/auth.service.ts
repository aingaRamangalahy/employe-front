import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MainService } from './main.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(public jwtHelper: JwtHelperService, public service: MainService) {
  }

  login(body: any): Observable<any> {
    return this.service._POST('/api/auth/signin', body);
  }



  isAuthenticated(): boolean {
    const token: any = this.getAccessToken();
    return !this.jwtHelper.isTokenExpired(token);
  }

  getAccessToken() {
    return localStorage.getItem('access-token');
  }

  getRefreshToken() {
    return localStorage.getItem('refresh-token');
  }

  storeTokens(access: string) {
    localStorage.setItem('access-token', access);
  }

  storeUser(userId: string, name: string){
    localStorage.setItem('user-id', userId);
    localStorage.setItem('username', name);
  }

  clearTokens() {
    localStorage.removeItem('access-token');
    localStorage.removeItem('refresh-token');
    localStorage.removeItem('user-id');
    localStorage.removeItem('username');
  }

}
