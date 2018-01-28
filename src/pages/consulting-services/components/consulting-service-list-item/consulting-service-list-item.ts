import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ConsultantService } from '../../../@shared/models/consultantService';
import { ConsultingServicePage } from '../../pages/consulting-service/consulting-service';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the PendingConsultantListItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'consulting-service-list-item',
  templateUrl: 'consulting-service-list-item.html',
  styles: ['consulting-service-list-item.scss']
})
export class ConsultingServiceListItemComponent {

  @Input() public consultingService: ConsultantService;

  constructor(public navCtrl: NavController) {
  }

  public selectPack(c) {
    this.navCtrl.push(ConsultingServicePage, { consultantService: c });
}

}
