import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
interface UserInfo {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class Auth {
  private router = inject(Router);

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  login(userInfo: {email: string, password: string}): Observable<string | boolean> {
    if(userInfo.email === 'admin@gmail.com' && userInfo.password === 'admin123') {
      this.setToken('rwemgomrgoemgFIfCMDEFIOfmMKVDSLMVmvcdlkvmDVFMDlKMVlvm')
      return of(true);
    }
    return throwError(() => new Error('Invalid email or password'));
  }

  logout() {
    localStorage.removeItem('token')
  }
}
