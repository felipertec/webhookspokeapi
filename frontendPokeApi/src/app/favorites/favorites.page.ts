import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonItem, IonList, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { FavoritesService } from '../services/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonItem]
})
export class FavoritesPage implements OnInit {

  favorites: any[] = [];

  constructor(private favoriteService: FavoritesService) { }

  ngOnInit() {
    this.favorites = this.favoriteService.getFavorites();
  }

}
