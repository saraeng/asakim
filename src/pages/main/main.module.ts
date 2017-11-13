import { AsakimCoreModule } from './../../@core/core.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainPage } from './main';

const HOME_PAGE_PAGES = [
  MainPage,
];
@NgModule({
  declarations: [
    ...HOME_PAGE_PAGES
  ],
  imports: [
    IonicPageModule.forChild(MainPage),
    AsakimCoreModule,
  ],
  entryComponents: [
    ...HOME_PAGE_PAGES
  ],
})
export class MainPageModule { }