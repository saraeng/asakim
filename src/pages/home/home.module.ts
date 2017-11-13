import { AsakimCoreModule } from './../../@core/core.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';

const HOME_PAGE_PAGES = [
  HomePage,
];
@NgModule({
  declarations: [
    ...HOME_PAGE_PAGES
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    AsakimCoreModule,
  ],
  entryComponents: [
    ...HOME_PAGE_PAGES
  ],
})
export class HomePageModule { }