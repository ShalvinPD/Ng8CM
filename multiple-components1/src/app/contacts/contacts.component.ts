import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';

const CONTACTS : Contact[] = [
  {id:1, name:'Shalvin'},
  {id:2, name:'Sarath'},
  {id:1, name:'Vyshakh'}
   ];
   
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  
  contacts = CONTACTS;
  selectedContact : Contact;

  constructor() { }
 
  onSelect(contact : Contact)
  {
    this.selectedContact = contact;
  }
  ngOnInit() {
  }

}
