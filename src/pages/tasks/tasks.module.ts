import { CreateTaskPage } from './components/create-task-page/create-task-page.components';
import { PagesSharedModule } from './../@shared/shared.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TasksPage } from './tasks';

@NgModule({
  declarations: [
    TasksPage,
    CreateTaskPage
  ],
  imports: [
    PagesSharedModule,
    IonicPageModule.forChild(TasksPage),
  ],
  entryComponents: [
    CreateTaskPage,
  ]
})
export class TasksPageModule {}
