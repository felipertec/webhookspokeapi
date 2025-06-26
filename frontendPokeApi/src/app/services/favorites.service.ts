import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favorites: any[] = [];

  constructor() { }

  addFavorite(pokemon: any){
    if(!this.isFavorite(pokemon)){
      this.favorites.push(pokemon);
    }
  }

  removeFavorite(pokemon: any){
    this.favorites = this.favorites.filter(p => p.name !== pokemon.name)
  }

  isFavorite(pokemon: any): boolean{
    return this.favorites.some(p => p.name === pokemon.name)
  }
}
