import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favorites: any[] = [];

  constructor() { }

  getFavorites(){
    console.log(this.favorites);
    return this.favorites;
  }

  addFavorite(pokemon: any){
    if(!this.isFavorite(pokemon)){
      this.favorites.push(pokemon);
    }
  }

  removeFavorite(pokemon: any){
    this.favorites = this.favorites.filter(p => p.name !== pokemon.name)
    this.favorites = this.favorites.filter(p => p.url !== pokemon.url)
  }

  isFavorite(pokemon: any): boolean{
    return this.favorites.some(p => p.name === pokemon.name)
  }
}
