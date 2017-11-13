import { AsakimCoreModule } from './../../@core/core.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListPage } from './list';

const HOME_PAGE_PAGES = [
    ListPage,
];
@NgModule({
  declarations: [
    ...HOME_PAGE_PAGES
  ],
  imports: [
    IonicPageModule.forChild(ListPage),
    AsakimCoreModule,
  ],
  entryComponents: [
    ...HOME_PAGE_PAGES
  ],
})
export class ListPageModule { }