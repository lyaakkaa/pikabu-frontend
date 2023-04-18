import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthToken, IUser} from "../models/models";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  BASE_URL = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<IUser> {
    return this.http.get<IUser>(`${this.BASE_URL}/users/`);
  }
  
}
