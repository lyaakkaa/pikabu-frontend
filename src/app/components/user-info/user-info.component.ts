import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../services/users.service";
import {IUser} from "../../models/models";


@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit{
  user_id: number;
  user: IUser;
  ngOnInit(): void {
    // @ts-ignore
    this.user_id = +localStorage.getItem('id');
    this.getUser();
  }

  constructor(private usersService: UsersService) {}

  getUser(){
    this.usersService.getUser(this.user_id).subscribe((data)=>{
      this.user = data;
    })
  }

  getLetter(): string {
    return this.user?.username.charAt(0).toUpperCase() || '☠';
  }

  updateUser(): void {
    this.usersService.updateUser(this.user, this.user_id).subscribe(user => {
      this.user = user;
    }, error => {
      this.getUser();
    });
    window.alert("Successfully modified!")
  }



}
