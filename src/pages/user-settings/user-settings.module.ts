import { PersonalSettingsCustomerDetails } from './personal/customer-details/customer-details.component';
import { AsakimCoreModule } from './../../@core/core.module';
import { PersonalSettingsPrefernces } from './personal/prefernces/prefernces.component';
import { PersonalSettingsAddress } from './personal/address/address.component';
import { PagesSharedModule } from './../@shared/shared.module';
import { ScoreSettingsPage } from './score/score.component';
import { PushSettingsPage } from './push/push.component';
import { PersonalSettingsContact } from './personal/contact/contact.component';
import { PersonalSettingsDetails } from './personal/details/details.component';
import { PersonalSettingsPage } from './personal/personal.component';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserSettingsPage } from './user-settings';

@NgModule({
  declarations: [
    UserSettingsPage,
    PushSettingsPage,
    ScoreSettingsPage,
    PersonalSettingsPage,
    PersonalSettingsDetails,
    PersonalSettingsCustomerDetails,
    PersonalSettingsContact,
    PersonalSettingsAddress,
    PersonalSettingsPrefernces
  ],
  imports: [
    AsakimCoreModule,
    PagesSharedModule,
    IonicPageModule.forChild(UserSettingsPage),
  ],
})
export class UserSettingsPageModule { }
