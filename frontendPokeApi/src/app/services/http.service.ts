import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl = 'https://pokeapi.co/api/v2'
  imageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
  constructor(
    private http: HttpClient
  ) { }

  getPokemons(offset: number = 0){
    return this.http.get(`${this.baseUrl}/pokemon?offset=${offset}&limit=25`).pipe(map(result => {
      return (result as any)['results'];
    }),
      map(pokemons => {
        return pokemons.map((poke: any, index: any) => {
          poke.image = this.getImagePokemon(index + offset + 1);
          poke.pokeIndex = offset + index + 1;
          return poke;
        })
      })
    )
  }

  getImagePokemon(index: number){
    return `${this.imageUrl}${index}.png`
  }
}
