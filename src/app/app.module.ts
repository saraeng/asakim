import { AsakimHttpInterceptor } from './../@core/services/asakim-http-interceptor.service';
import { ListPageModule } from './../pages/list/list.module';
import { HomePageModule } from './../pages/home/home.module';
import { AsakimCoreModule } from './../@core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { AsakimApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

const ASAKIM_PAGES = [
  HomePageModule,
  ListPageModule
];

@NgModule({
  declarations: [
    AsakimApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(AsakimApp),
    AsakimCoreModule.forRoot(),
    ...ASAKIM_PAGES
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AsakimApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    { provide: HTTP_INTERCEPTORS, useClass: AsakimHttpInterceptor, multi: true }
    
  ]
})
export class AppModule { }
