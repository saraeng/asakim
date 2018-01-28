
import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { ContactDetails } from '../../../models/contactDetails';

@Component({
    selector: 'contact-details-box',
    templateUrl: 'contact-details-box.component.html',
    styles: ['contact-details-box.component.scss']
})
export class ContactDetailsBox implements OnInit {

    @HostBinding('class.is-open') isOpen = false;
    @Input() contactDetails: ContactDetails;
  
    toggle() {
      this.isOpen = !this.isOpen;
    }

    ngOnInit(): void {
    }
}