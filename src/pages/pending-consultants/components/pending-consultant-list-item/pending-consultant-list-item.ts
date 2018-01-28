import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Consultant } from '../../../@shared/models/consultant';

/**
 * Generated class for the PendingConsultantListItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'pending-consultant-list-item',
  templateUrl: 'pending-consultant-list-item.html',
  styles: ['pending-consultant-list-item.scss']
})
export class PendingConsultantListItemComponent {

  @Input() consultant: Consultant;
  @Input() isConsultantChosen = false;
  @Output() consultantChosen = new EventEmitter<Consultant>();

  constructor() {
    console.log('Hello PendingConsultantListItemComponent Component');
  }

  public chooseConsultant(c) {
    // this.consultantChosen = true;
    this.consultant.chosen = true;
    this.consultantChosen.emit(this.consultant);
  }

}
