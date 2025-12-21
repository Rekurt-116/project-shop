import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {User} from '../../../shared/models/interfaces/user/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {
  private readonly http = inject(HttpClient);
  private readonly usersUrl = 'https://api.escuelajs.co/api/v1/users';

  getUsers(search = '') {
    let params = new HttpParams();

    if(search) {
      params = params.set('name', search);
    }
    return this.http.get<User[]>(this.usersUrl, {params: params});
  };

  getUserById(id: number) {
    return this.http.get<User>(`https://api.escuelajs.co/api/v1/users/${id}`)
  }
}
