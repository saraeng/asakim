import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PendingConsultantsPage } from './pending-consultants';
import { Ionic2RatingModule } from "ionic2-rating";

@NgModule({
  declarations: [
    PendingConsultantsPage,
  ],
  imports: [
    IonicPageModule.forChild(PendingConsultantsPage),
    Ionic2RatingModule
  ],
})
export class PendingConsultantsPageModule {}
