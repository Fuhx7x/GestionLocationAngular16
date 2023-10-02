import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './cars/cars.component';
import { HomeComponent } from './home/home.component';
import { ClientsComponent } from './clients/clients.component';
import { UsersComponent } from './users/users.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { AddReservationsComponent } from './reservations/add-reservations/add-reservations.component';

const routes: Routes = [
  { path: 'Dashboard/Cars', component: CarsComponent }, 
  { path: 'Dashboard', component: HomeComponent },
  { path: 'Dashboard/Clients', component: ClientsComponent },
  { path: 'Dashboard/Users', component: UsersComponent },
  { path: 'Dashboard/Reservations', component: ReservationsComponent },
  { path: 'Dashboard/Reservations/addReservations', component: AddReservationsComponent },
  { path: 'Dashboard/Maintenances', component: MaintenanceComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
