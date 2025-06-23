import { Component, OnInit, ViewChild } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonGrid, IonRow, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonLabel, IonThumbnail, IonList, IonCardContent, IonInfiniteScroll, IonInfiniteScrollContent } from '@ionic/angular/standalone';
import { HttpService } from '../services/http.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, CommonModule, IonGrid,IonCard,IonCardHeader,
            IonCardTitle,IonCardSubtitle,IonItem,IonLabel,IonThumbnail,IonList,IonCardContent,
            RouterModule, IonInfiniteScroll, IonInfiniteScrollContent],
})
export class HomePage implements OnInit {

  public pokemons: any[] = [];
  offset= 0;
  @ViewChild(IonInfiniteScroll) infinite!: IonInfiniteScroll;

  constructor(
    private httpService: HttpService
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

        if(this.offset === 25){
          this.infinite.disabled = true;
        }
    })
  }
}
