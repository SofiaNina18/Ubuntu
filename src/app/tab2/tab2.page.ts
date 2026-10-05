import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput, IonSelect, IonSelectOption, IonLabel, IonDatetime, IonButton } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Eventos } from '../servicios/eventos';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonItem, IonInput, IonSelect, IonSelectOption, IonLabel, IonDatetime, IonButton, FormsModule]
})
export class Tab2Page 
{
  private eventosService = inject(Eventos);
  evento = { id:-1, speaker:'yo', title: 'algo', place: 'Bilbao', date:'2026-09-15'};
  enviarFormulario()
  {
    this.eventosService.addEvent(this.evento);
  }
  

}
