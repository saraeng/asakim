import { PagesSharedModule } from './../@shared/shared.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FundingPage } from './funding';

@NgModule({
  declarations: [
    FundingPage,
  ],
  imports: [
    PagesSharedModule,
    IonicPageModule.forChild(FundingPage),
  ],
})
export class FundingPageModule {}
