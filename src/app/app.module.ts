import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarListComponent } from './Components/car-list/car-list.component';
import { CarDetailsComponent } from './Components/car-list/car-details/car-details.component';
import { CarData } from './Services/CarData.service';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './Components/order/order.component';
import { CommonModule } from '@angular/common';

const routes:Routes = 
[
  {path:'Cars', component:CarListComponent, children:[{path:':id', component:CarDetailsComponent}]},
  {path:'Cars/:id/Order', component:OrderComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CarDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  providers: [CarData],
  bootstrap: [AppComponent]
})
export class AppModule { }
