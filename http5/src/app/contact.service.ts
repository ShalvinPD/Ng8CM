import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contactsUrl = 'api/contacts';
  constructor(private http: HttpClient) { }

  getContacts() : Observable<Contact[]>
  {
    return this.http.get<Contact[]>(this.contactsUrl);

  }
}
