import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {UserService} from "../../../servises";
import {IUser} from "../../../interfaces";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
form:FormGroup
  users:IUser[]
  @Output()
  event= new EventEmitter<number>()
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  this.form= new FormGroup({
    userId: new FormControl('')
  })
    this.userService.getAll().subscribe(value => this.users=value)
  }


  getUserId():void {

    this.event.emit(this.form.controls.userId.value)
  }
}
