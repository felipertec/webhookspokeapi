import { Component, OnInit, ViewChild } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonGrid, IonRow, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonLabel, IonThumbnail, IonList, IonCardContent, IonInfiniteScroll, IonInfiniteScrollContent, IonSearchbar, IonAvatar, IonSkeletonText, IonIcon, IonTab, IonTabs } from '@ionic/angular/standalone';
import { HttpService } from '../services/http.service';
import { FavoritesService } from '../services/favorites.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, CommonModule, IonCard,IonCardHeader,
            IonCardTitle,IonCardSubtitle,IonItem,IonLabel,IonThumbnail,IonList,IonCardContent,
            RouterModule, IonInfiniteScroll, IonInfiniteScrollContent, IonSearchbar,IonAvatar, IonSkeletonText,
            IonIcon],
})
export class HomePage implements OnInit {

  public pokemons: any[] = [];
  offset= 0;
  @ViewChild(IonInfiniteScroll) infinite!: IonInfiniteScroll;

  constructor(
    private httpService: HttpService,
    private favoriteService: FavoritesService
  ) {}

  ngOnInit(): void {
    this.loadPokemons()
  }

  loadPokemons(loadMore: boolean = false, event?: any){
    if(loadMore){
        this.offset += 25;
    }
    this.httpService.getPokemons(this.offset).subscribe(data => {
        console.log('resultado', data)
        this.pokemons = [...this.pokemons, ...data];

        if(event){
          event.target.complete();
        }

        if(this.offset === 125){
          this.infinite.disabled = true;
        }
    })
  }

  onSearchChange(e: any){
    let value = e.detail.value;

    if(value.trim() == ''){
      this.offset = 0;
      this.pokemons = [];
      this.loadPokemons();
      return;
    }

    this.httpService.findPokemon(value.toLowerCase()).subscribe(res => {
      if(res.id > 150){
        this.pokemons = []
        return;
      }

      this.pokemons = [res];
    }, err => {
      this.pokemons = [];
    })
  }

  toggleFavorite(pokemon: any){
      if (this.favoriteService.isFavorite(pokemon)) {
      this.favoriteService.removeFavorite(pokemon);
      } else {
        this.favoriteService.addFavorite(pokemon);
      }
  }

  isFavorite(pokemon: any): boolean{
    return this.favoriteService.isFavorite(pokemon);
  }
}
