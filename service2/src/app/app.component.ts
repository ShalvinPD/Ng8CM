import { Component, OnInit } from '@angular/core';
import { ContactService } from "./contact.service";
import { Contact } from "./contact";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular Service';
  

  
constructor(private contactService : ContactService){}

ngOnInit(): void
{
  
}
  
  
}
