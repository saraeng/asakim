import { FundingPageModule } from './../pages/funding/funding.module';
import { LecturesPageModule } from './../pages/lectures/lectures.module';
import { UserSettingsPageModule } from './../pages/user-settings/user-settings.module';
import { ContactUsPageModule } from './../pages/contact-us/contact-us.module';
import { HomePageModule } from './../pages/home/home.module';
import { LoginPageModule } from './../pages/login/login.module';
import { AsakimHttpInterceptor } from './../@core/services/asakim-http-interceptor.service';
import { ListPageModule } from './../pages/list/list.module';
import { MainPageModule } from './../pages/main/main.module';
import { AsakimCoreModule } from './../@core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { AsakimApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TasksPageModule } from '../pages/tasks/tasks.module';
import { FCM } from '@ionic-native/fcm';
import { GoogleMaps } from '@ionic-native/google-maps';
import { NgxGaugeModule } from 'ngx-gauge';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { PendingConsultantsPageModule } from '../pages/pending-consultants/pending-consultants.module';

const ASAKIM_PAGES = [
  MainPageModule,
  HomePageModule,
  ListPageModule,
  TasksPageModule,
  PendingConsultantsPageModule,
  LoginPageModule,
  ContactUsPageModule,
  UserSettingsPageModule,
  LecturesPageModule,
  FundingPageModule
];

@NgModule({
  declarations: [
    AsakimApp,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxGaugeModule,
    IonicModule.forRoot(AsakimApp),
    AsakimCoreModule.forRoot(),
    ...ASAKIM_PAGES,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AsakimApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    FCM,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    { provide: HTTP_INTERCEPTORS, useClass: AsakimHttpInterceptor, multi: true }

  ]
})
export class AppModule { }
