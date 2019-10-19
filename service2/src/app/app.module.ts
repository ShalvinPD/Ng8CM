import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import  { ContactService} from './contact.service';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { FormsModule} from '@angular/forms';
import { ContactsComponent } from './contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactDetailComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
