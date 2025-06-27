import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [ CommonModule, IonTabs,  IonTabBar, IonTabButton,IonLabel, IonIcon, RouterModule,]
})
export class TabsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
