import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service';

@Component({
  selector: 'app-login-menu',
  templateUrl: './login-menu.component.html',
  styleUrls: ['./login-menu.component.css']
})
export class LoginMenuComponent {

  constructor(private authService: AuthService) { }

  registerMode: boolean = false;

  password: string = ""
  username: string = ""

  submit() {
    if (this.registerMode) {
      this.authService.signUp(this.username, this.password);
    } else {
      this.authService.signIn(this.username, this.password);
    }
  }
}
