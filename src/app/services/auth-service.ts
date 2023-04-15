import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    baseUrl = "";

    getToken(): string | null {
        let token = localStorage.getItem('auth_token');
        if (token == null) {
            this.signOut();
            return null;
        }
        return token;
    }

    signIn(username: string, password: string) {
        const token = "";
        console.log("works");
        localStorage.setItem('auth_token', token);
    }

    signUp(username: string, password: string) {
        const token = "";
        localStorage.setItem('auth_token', token);
    }

    signOut() {
        localStorage.removeItem('auth_token');
    }
}