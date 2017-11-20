import { GoogleMaps } from '@ionic-native/google-maps';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactUsPage } from './contact-us';

@NgModule({
  declarations: [
    ContactUsPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactUsPage),
  ],
  providers: [GoogleMaps]
})
export class ContactUsPageModule {}
