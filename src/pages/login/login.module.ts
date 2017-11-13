import { PagesSharedModule } from './../@shared/shared.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    PagesSharedModule,
    IonicPageModule.forChild(LoginPage),
  ],
})
export class LoginPageModule {}
