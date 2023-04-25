import {Component, OnInit} from '@angular/core';
import { AuthService } from 'src/app/services/auth-service';
import {ICategory} from "../../models/models";
import {CategoryService} from "../../services/category.service";

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
  name: string = ""



  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if(token){
      this.logged = true;
    }
  }

  getUserName(){
    // @ts-ignore
    this.name = localStorage.getItem('username');
    return this.name.charAt(0).toUpperCase() + this.name.slice(1);
  }





  submit() {
    if (this.registerMode) {
      this.password = this.password.trim();
      this.username = this.username.trim();
      if (!(this.username && this.password)) {
        window.alert('Email, password and username shouldn\'t be empty!');
        return;
      }
      this.authService.signUp(this.username, this.password)
        .subscribe((data) => {
          if (data.token == undefined) {
            return;
          }
          localStorage.setItem('token', data.token);
          localStorage.setItem('username', this.username)
          localStorage.setItem('id', (data.id).toString())
          this.username = '';
          this.password = '';
          this.logged = true;
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
        if (data.token == undefined) {
          window.alert('Invalid credentials!');
          return;
        }
        localStorage.setItem('username', this.username)
        localStorage.setItem('token', data.token);
        localStorage.setItem('id', (data.id).toString())
        this.username = '';
        this.password = '';
        this.logged = true;
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
