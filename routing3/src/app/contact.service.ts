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
  constructor() { }

}
