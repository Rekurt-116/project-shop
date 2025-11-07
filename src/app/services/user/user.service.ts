import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface IUser {
  name: string;
  email: string;
  isAdmin: boolean | null;
}

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor() {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      this.userSubject.next(JSON.parse(savedUser));
    }

    this.user$.subscribe((user) => {
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
      } else {
        localStorage.removeItem('user');
      }
    });
  }

  private readonly userSubject = new BehaviorSubject<IUser | null>(null);
  public readonly user$ = this.userSubject.asObservable();

  private user: IUser = {
    name: 'Muhammad',
    email: 'email@gmail.com',
    isAdmin: null,
  };

  loginAsAdmin() {
    this.userSubject.next({ ...this.user, isAdmin: true });
    console.log('Вы вошли как администратор');
  }

  loginAsUser() {
    this.userSubject.next({ ...this.user, isAdmin: false });
    console.log('Вы вошли как пользователь');
  }

  get isAdmin() {
    return this.userSubject.value?.isAdmin;
  }

  logOut() {
    this.userSubject.next(null);
    console.log('Вы вышли из системы');
  }
}
