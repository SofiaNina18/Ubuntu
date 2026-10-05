import { Component, OnInit, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonList, IonListHeader, IonLabel, IonCardTitle, IonItem} from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import{ Eventos } from '../servicios/eventos';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonList, IonListHeader, IonLabel, IonCardTitle, IonItem],
})
export class Tab1Page implements OnInit
{
  private eventosService = inject(Eventos);
  eventos: any;

  ngOnInit()
  {
    this.eventos = this.eventosService.searchData();
    //console.log(this.eventos);
  }
  
}
