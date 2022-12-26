import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DrinkEntidad } from 'src/app/entities/drinks.entidad';
import { DataService } from 'src/app/services/data.service';
import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';
import {Location} from '@angular/common';

@Component({
  selector: 'detail-drink',
  templateUrl: './detail-drink.component.html',
  styleUrls: ['./detail-drink.component.css']
})
export class DetailDrinkComponent implements OnInit{

  public idDrink: number;
  public drinkItem: DrinkEntidad;
  public faCircleChevronLeft = faCircleChevronLeft;

  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute,
    private router:Router,
    private location: Location
  ){
    this.drinkItem = new DrinkEntidad;
  }

  ngOnInit(): void {

    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
    };

    this.idDrink = this.activatedRoute.snapshot.params['id'];

    this.dataService.getDrink(this.idDrink).subscribe(cocktails => {
      this.drinkItem = cocktails.drinks[0];
    });
  }

  clickAtras(){
    this.location.back();
  }


}
