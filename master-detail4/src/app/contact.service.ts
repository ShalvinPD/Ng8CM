import { Injectable } from '@angular/core';
import { Contact } from "./contact";
import { CONTACTS } from "./mock-contacts";
import {Observable, of} from 'rxjs'

@Injectable()
export class ContactService {

  getContacts() : Observable<Contact[]>
  {
    return of(CONTACTS);
  }

  getContact(id: number): Observable<Contact>
  {
    return of(CONTACTS.find( hero => hero.id === id))
  }
  constructor() { }

}
