import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faMartiniGlassCitrus, faWineGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  faMartiniGlassCitrus = faMartiniGlassCitrus;
  faWineGlass = faWineGlass;

  constructor(private router:Router){

  }

  irNoAlcoholic(){
    this.router.navigate(['drinks/noalcoholic']);
  }

  irAlcoholic(){
    this.router.navigate(['drinks/alcohol']);
  }
}
