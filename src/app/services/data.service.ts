import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DrinkEntidad } from '../entities/drinks.entidad';
import { Observable } from 'rxjs'
// import { PersonaEntidad } from '../entidades/persona.entidad';

@Injectable()
export class DataService{

  headers = new HttpHeaders();
  private url:string = "https://www.thecocktaildb.com/api/";

  constructor(private httpClient: HttpClient) {
    this.headers = this.headers.set('Content-Type', 'application/json;charset=utf-8');
  }

  getDrinks(typeDrink: String): Observable<any> {
    if(typeDrink == "alcohol"){
      return this.httpClient.get<DrinkEntidad[]>(this.url+'json/v1/1/filter.php?a=Alcoholic');
    }else{
      return this.httpClient.get<DrinkEntidad[]>(this.url+'json/v1/1/filter.php?a=Non_Alcoholic');
    }
  }

  getDrink(idDrink: number): Observable<any> {
    return this.httpClient.get<DrinkEntidad[]>(this.url+'json/v1/1/lookup.php?i='+idDrink);
  }
}
