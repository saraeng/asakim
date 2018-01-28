import { PagesSharedModule } from './../@shared/shared.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsultingServicesPage } from './consulting-services';
import { ConsultingServicePage } from './pages/consulting-service/consulting-service';
import { ConsultingServiceListItemComponent } from './components/consulting-service-list-item/consulting-service-list-item';
import { PackageDetails } from './pages/consulting-service/details/details';

@NgModule({
  declarations: [
    ConsultingServicesPage,
    ConsultingServicePage,
    ConsultingServiceListItemComponent,
    PackageDetails
  ],
  imports: [
    PagesSharedModule,
    IonicPageModule.forChild(ConsultingServicesPage),
  ],
  entryComponents: 
  [
    ConsultingServicePage,
    PackageDetails
  ]
})
export class ConsultingServicesPageModule {}
