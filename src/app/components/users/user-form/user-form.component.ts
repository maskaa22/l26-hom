import { Component, OnInit, Output } from '@angular/core';
import {IUser} from "../../../interfaces";
import {UserService} from "../../../servises";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  users:IUser[]

  user:IUser

  usersOption:number
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe(value => this.users=value)
  }

  save(tref: HTMLFormElement):void {

    //console.log(this.usersOption);
    this.userService.getById(this.usersOption).subscribe(value => {

      this.user = value
    })
  }
}
