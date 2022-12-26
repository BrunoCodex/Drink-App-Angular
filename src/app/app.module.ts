import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import {ButtonModule} from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { ListaDrinksComponent } from './components/lista-drinks/lista-drinks.component';
import { DetailDrinkComponent } from './components/detail-drink/detail-drink.component';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import {CardModule} from 'primeng/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ListaDrinksComponent,
    DetailDrinkComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    AppRoutingModule,
    HttpClientModule,
    CardModule,
    FontAwesomeModule
  ],
  providers: [
    DataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
