import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  getPokemons(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=150')
  }
}
