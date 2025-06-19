import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonGrid, IonRow } from '@ionic/angular/standalone';
import { HttpService } from '../services/http.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, CommonModule, IonItem, IonGrid, IonRow],
})
export class HomePage implements OnInit {

  public pokemons: any[] = [];

  constructor(
    private httpService: HttpService
  ) {}

  ngOnInit(): void {
    this.getPokemons()
  }

  getPokemons(){
    this.httpService.getPokemons().subscribe((data: any) => this.pokemons = data.results)
  }
}
