import { Component, OnInit } from '@angular/core';
import {UserService} from "../../servises";
import {IUser} from "../../interfaces";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user:IUser
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  getId(id: number) {
    this.userService.getById(id).subscribe(value => {

      this.user = value

    })
  }
}
