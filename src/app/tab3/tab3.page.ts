import { Component, inject, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonListHeader, IonLabel, IonItem, IonButton, IonIcon } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Eventos } from '../servicios/eventos';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonListHeader, IonLabel, IonItem, IonButton, IonIcon],
})
export class Tab3Page implements OnInit
{
  private eventosService = inject(Eventos);
  eventos: any
  ngOnInit()
  {
    this.eventos = this.eventosService.searchData();
  }

  delete(index: any)
  {
    this.eventosService.deleteEvent(index);
    this.eventos = this.eventosService.searchData();
  }
}
