import { TaskStatusIndicator } from './components/task-status/task-status.components';
import { TaskFilter } from './pipes/task.pipe';
import { PagesSharedModule } from './../@shared/shared.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TasksPage } from './tasks';

@NgModule({
  declarations: [
    TasksPage,
    TaskFilter,
    TaskStatusIndicator
  ],
  imports: [
    PagesSharedModule,
    IonicPageModule.forChild(TasksPage),
  ],
})
export class TasksPageModule {}
