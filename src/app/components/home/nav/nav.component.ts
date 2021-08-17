import {Component, Input, OnInit} from '@angular/core';
import {ILinks} from "../../../interfaces";
import {Router} from "@angular/router";
import {CarService, DataTransferService} from "../../../servises";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input()
  links:ILinks
  constructor(private router:Router, private carService:CarService, private dataTransferService:DataTransferService) { }

  ngOnInit(): void {
  }

  next() {
    this.carService.getAll(this.links.next).subscribe(value => {
        this.dataTransferService.setData(value.data)
      }
    )
  }

  prev() {

  }
}
