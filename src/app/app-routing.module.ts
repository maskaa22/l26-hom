import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {CarsComponent} from "./components/home/cars/cars.component";
import {CarComponent} from "./components/home/cars/car/car.component";
import {CarFullResolveService} from "./servises";
import {UsersComponent} from "./components/users/users.component";

const routes: Routes = [
  {path:'', redirectTo: 'cars',pathMatch: 'full'},
  {path: '', component: HomeComponent, resolve:{cars:CarFullResolveService}, children:[
      {path: 'cars', component:CarsComponent, children:[
          {path:':id', component:CarComponent}
        ]}
    ]},
  {path: 'users', component:UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
