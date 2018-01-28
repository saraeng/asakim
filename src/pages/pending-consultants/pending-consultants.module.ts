import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PendingConsultantsPage } from './pending-consultants';
import { Ionic2RatingModule } from "ionic2-rating";
import { PendingConsultantListItemComponent } from './components/pending-consultant-list-item/pending-consultant-list-item';
import { PagesSharedModule } from '../@shared/shared.module';

@NgModule({
  declarations: [
    PendingConsultantsPage,
    PendingConsultantListItemComponent
  ],
  imports: [
    IonicPageModule.forChild(PendingConsultantsPage),
    Ionic2RatingModule,
    PagesSharedModule
  ],
})
export class PendingConsultantsPageModule {}
