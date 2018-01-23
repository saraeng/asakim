import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PendingConsultantsPage } from './pending-consultants';

@NgModule({
  declarations: [
    PendingConsultantsPage,
  ],
  imports: [
    IonicPageModule.forChild(PendingConsultantsPage),
  ],
})
export class PendingConsultantsPageModule {}
