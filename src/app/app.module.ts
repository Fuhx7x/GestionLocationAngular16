import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CarsComponent } from './cars/cars.component';
import { ClientsComponent } from './clients/clients.component';
import { UsersComponent } from './users/users.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { AddReservationsComponent } from './reservations/add-reservations/add-reservations.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarsComponent,
    ClientsComponent,
    UsersComponent,
    MaintenanceComponent,
    ReservationsComponent,
    AddReservationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
