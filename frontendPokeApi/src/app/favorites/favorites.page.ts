import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonThumbnail, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { FavoritesService } from '../services/favorites.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonItem,RouterModule,IonLabel,IonIcon,IonThumbnail]
})
export class FavoritesPage{

  favorites: any[] = [];

  constructor(private favoriteService: FavoritesService) { }

  ionViewWillEnter() {
    this.isLoaded();
  }

isLoaded(){
  this.favorites = this.favoriteService.getFavorites();
}

  toggleFavorite(pokemon: any){
      if (this.favoriteService.isFavorite(pokemon)) {
      this.favoriteService.removeFavorite(pokemon);
      } else {
        this.favoriteService.addFavorite(pokemon);
      }
      this.isLoaded();
  }

  isFavorite(pokemon: any): boolean{
    return this.favoriteService.isFavorite(pokemon);
  }

}
