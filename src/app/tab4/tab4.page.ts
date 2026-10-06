import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonListHeader, IonLabel, IonItem, IonButton, IonIcon, IonInput, IonSelect, IonSelectOption, IonDatetime } from '@ionic/angular';
import { Eventos } from '../servicios/eventos';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonListHeader, IonLabel, IonItem, IonButton, IonIcon, IonInput, IonSelect, IonSelectOption, IonDatetime, FormsModule],
})
export class Tab4Page implements OnInit
{
  private eventosService = inject(Eventos);
  eventos: any;
  selectedEventIndex: number | null = null;
  eventoEdit: any = { speaker: '', title: '', place: '', date: '' };

  ngOnInit()
  {
    this.eventos = this.eventosService.searchData();
  }

  selectForEdit(index: number) {
    this.selectedEventIndex = index;
    const current = this.eventosService.getEvent(index);
    this.eventoEdit = { ...current };
  }

  actualizarFormulario() {
    if (this.selectedEventIndex !== null) {
      this.eventosService.updateEvent(this.selectedEventIndex, this.eventoEdit);
      this.eventos = this.eventosService.searchData();
      this.cancelar();
    }
  }

  cancelar() {
    this.selectedEventIndex = null;
    this.eventoEdit = { speaker: '', title: '', place: '', date: '' };
  }
}