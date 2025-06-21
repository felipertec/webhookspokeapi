import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonGrid, IonRow, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonLabel, IonThumbnail, IonList, IonCardContent } from '@ionic/angular/standalone';
import { HttpService } from '../services/http.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, CommonModule, IonGrid,IonCard,IonCardHeader,IonCardTitle,IonCardSubtitle,IonItem,IonLabel,IonThumbnail,IonList,IonCardContent],
})
export class HomePage implements OnInit {

  public pokemons: any[] = [];
  offset= 0;
  constructor(
    private httpService: HttpService
  ) {}

  ngOnInit(): void {
    this.loadPokemons()
  }

  loadPokemons(){
    this.httpService.getPokemons(this.offset).subscribe(data => {
        console.log('resultado', data)
        return this.pokemons = data;
    })
  }
}
