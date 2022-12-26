import { Component, OnInit } from '@angular/core';
import { DrinkEntidad } from 'src/app/entities/drinks.entidad';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'lista-drinks',
  templateUrl: './lista-drinks.component.html',
  styleUrls: ['./lista-drinks.component.css']
})

export class ListaDrinksComponent implements OnInit{

  public drinkList: DrinkEntidad[];
  public typeDrink: String;
  public title: String;
  public faHome = faHome;

  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ){}

  ngOnInit(): void {

    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
    };

    this.typeDrink = this.activatedRoute.snapshot.params['type'];

    if(this.typeDrink == "alcohol"){
      this.title = "Bebidas con alcohol";
    }else{
      this.title = "Bebidas sin alcohol";
    }

    this.dataService.getDrinks(this.typeDrink).subscribe(cocktails => {
      this.drinkList = cocktails.drinks;
    });

  }
}

