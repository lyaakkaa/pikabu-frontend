import {Component, OnInit} from '@angular/core';
import { AuthService } from 'src/app/services/auth-service';

@Component({
  selector: 'app-login-menu',
  templateUrl: './login-menu.component.html',
  styleUrls: ['./login-menu.component.css']
})
export class LoginMenuComponent implements OnInit{

  logged: boolean = false;
  registerMode: boolean = false;
  password: string = ""
  username: string = ""
  email: string = ""

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if(token){
      this.logged = true;
    }
  }



  submit() {
    if (this.registerMode) {
      this.email = this.email.trim();
      this.password = this.password.trim();
      this.username = this.username.trim();
      if (!(this.username && this.password && this.email)) {
        window.alert('Email, password and username shouldn\'t be empty!');
        return;
      }
      this.authService.signUp(this.username, this.password, this.email)
        .subscribe((data) => {
          localStorage.setItem('token', data.access);
          this.username = '';
          this.email = '';
          this.password = '';
        }, error => {
          window.alert('Registration wasn\'t accomplished, please register again!');
        });


    } else {
      this.password = this.password.trim();
      this.username = this.username.trim();
      if (!(this.username && this.password)) {
        window.alert('Password and username shouldn\'t be empty!');
        return;
      }
      this.authService.signIn(this.username, this.password).subscribe((data)=>{
        localStorage.setItem('token', data.access);
        this.username = '';
        this.password = '';
        this.logged = true;
        console.log(data);
      },  error => {
        window.alert('Invalid credentials!');
      });
    }
  }


  logout(): void {
    localStorage.removeItem('token');
    this.logged = false;
  }


}
