import { Component, OnInit } from '@angular/core';
import { Location} from '@angular/common';
import { ContactService } from "../contact.service";
import { Contact } from "../contact";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  selectedContact : Contact;

  contacts : Contact[];

  constructor(private contactService : ContactService,
    private location: Location) { }

  ngOnInit(): void
  {
    this.contactService.getContacts().subscribe(contacts => this.contacts = contacts );
  }
  
   onSelect(contact : Contact)
   {
    this.selectedContact = contact;
   }
  
}
