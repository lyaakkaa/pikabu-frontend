import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthToken} from "../models/models";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    BASE_URL = 'http://127.0.0.1:8000/api';

    constructor(private client: HttpClient) {}

    getToken(): string | null {
        let token = localStorage.getItem('token');
        if (token == null) {
            this.signOut();
            return null;
        }
        return token;
    }

    signIn(username: string, password: string): Observable<AuthToken> {
      return this.client.post<AuthToken>(`${this.BASE_URL}/signin`, {
        username,
        password,
      });
    }

    signUp(username: string, password: string): Observable<AuthToken> {
      return this.client.post<AuthToken>(`${this.BASE_URL}/signup`, {
        username,
        password,
      });
    }

    signOut() {
      localStorage.clear();
    }
}
