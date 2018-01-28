
import { Component, OnInit, Input, HostListener } from '@angular/core';
import { ContactDetailsBox } from '../contact-details-box/contact-details-box.components';

@Component({
    selector: 'contact-details-btn',
    templateUrl: 'contact-details-btn.component.html',
    styles: ['contact-details-btn.component.scss']
})
export class ContactDetailsBtn implements OnInit {

    @Input() contactDetails: ContactDetailsBox;
    
    //   @HostListener('click')
    toggleContactDetails() {
        this.contactDetails.toggle();
      }

    ngOnInit(): void {
    }
}