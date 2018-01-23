import { PagesSharedModule } from './../@shared/shared.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FundingPage } from './funding';
import { FundDetailsPage } from './pages/fund-details/fund-details';
import { CancelFundPage } from './components/cancel-fund/cancel-fund.component';

@NgModule({
  declarations: [
    FundingPage,
    FundDetailsPage,
    CancelFundPage
  ],
  imports: [
    PagesSharedModule,
    IonicPageModule.forChild(FundingPage),
  ],
  entryComponents: 
  [
    FundDetailsPage,
    CancelFundPage
  ]
})
export class FundingPageModule {}
