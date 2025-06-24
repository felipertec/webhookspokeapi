import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl = 'https://pokeapi.co/api/v2'
  imageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
  gifUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/'
  constructor(
    private http: HttpClient
  ) { }


  primeiraLetraMaiuscula(str: string) {
  if (str.length === 0) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

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

  getImagePokemon(index: any){
    return `${this.imageUrl}${index}.png`
  }


 typeTranslations: any = {
    normal: 'normal',
    fire: 'fogo',
    water: 'água',
    electric: 'elétrico',
    grass: 'grama',
    ice: 'gelo',
    fighting: 'lutador',
    poison: 'venenoso',
    ground: 'terra',
    flying: 'voador',
    psychic: 'psíquico',
    bug: 'inseto',
    rock: 'pedra',
    ghost: 'fantasma',
    dark: 'noturno',
    dragon: 'dragão',
    steel: 'aço',
    fairy: 'fada'
 }

  getPokemonsDetails(index: number){
    return this.http.get(`${this.baseUrl}/pokemon/${index}`).pipe(map((pokemon: any) => ({
      name: pokemon.name,
      height: pokemon.height,
      weight: pokemon.weight, 
      id: pokemon.id,
      sprite: pokemon.sprites.other.showdown.front_default,
      types: pokemon.types.map((type: any) => ({
        ...type,
        translatedName: this.typeTranslations[type.type.name] || type.type.name
      })),
      abilities: pokemon.abilities.map((ability: any) => ({
        ...ability,
        skill: ability.ability.name
      })),
      versions: pokemon.game_indices.map((gameIndice: any) => gameIndice.version.name).join(', ')
    }))
  )
  }

  findPokemon(search: string){
    return this.http.get(`${this.baseUrl}/pokemon/${search}`).pipe(
      map((pokemon: any) => {
        return {
          ...pokemon,
          image: this.getImagePokemon(pokemon.id),
          pokeIndex: pokemon.id
        }
      })
    )
  }
}
