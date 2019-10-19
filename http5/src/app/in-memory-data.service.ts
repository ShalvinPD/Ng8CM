import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const contacts= [
      {id:1, name : 'Shalvin'},
      {id:2, name : 'Sarath'},
      {id:3, name : 'Vaishnav'}
      ];
      return {contacts};
  }

  genId(heroes: Contact[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
  constructor() { }
}
