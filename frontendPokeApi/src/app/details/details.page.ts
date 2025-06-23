import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonRow, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../services/http.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonGrid, IonRow,IonCol,IonButton,IonBackButton,IonButtons]
})

export class DetailsPage implements OnInit {

  details: any
  isEnabledTechnicalSheet: boolean = true;
  isEnabledSkills: boolean = false;
  constructor(private route: ActivatedRoute, private httpService: HttpService) { }

  ngOnInit() {
    let index: any = this.route.snapshot.paramMap.get('index');
    if(index){
      this.httpService.getPokemonsDetails(index).subscribe(data => {
        console.log(data);
        this.details = data;
      })
    }
    
  }
  
  technicalSheetTab(){
    this.isEnabledTechnicalSheet = true;
    this.isEnabledSkills = false;
  }
  
  skillsTab(){
    this.isEnabledTechnicalSheet = false;
    this.isEnabledSkills = true;
  }

}
