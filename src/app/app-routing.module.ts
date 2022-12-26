import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListaDrinksComponent } from './components/lista-drinks/lista-drinks.component';
import { DetailDrinkComponent } from './components/detail-drink/detail-drink.component';

const routers: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'drinks/:type', component: ListaDrinksComponent},
  // {path: 'drinks/noalcoholic', component: ListaDrinksComponent},
  {path: 'drink/:id', component: DetailDrinkComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routers)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
