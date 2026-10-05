import { Service } from '@angular/core';

@Service()
export class Eventos {
    events: any = [];

    constructor()
    {
        this.events = [
            {
                id: 0,
                speaker: 'Homer Simpson',
                title: 'Emprender con Compuglobalmeganet',
                place: 'Bilbao',
                date: '25-09-2026'

            },
            {
                id: 1,
                speaker: 'Peter Griffin',
                title: 'Trabajar en una fábrica de cerveza',
                place: 'Donostia',
                date: '28-09-2026'
                
            },
            {
                id: 2,
                speaker: 'Ralph Wiggum',
                title: 'Corre platano',
                place: 'Vitoria',
                date: '28-09-2026'
                
            }
        ];
    }
    searchData()
    {
        return this.events;
    }

    addEvent(evento: any)
    {
        const nuevoEvento = { id: this.events.length, speaker: evento.speaker, title:evento.title, place: evento.place, date: evento.date
        };
        this.events.push(nuevoEvento);
    }

    deleteEvent(id:any)
    {
        this.events.splice(id, 1);
    }
}
