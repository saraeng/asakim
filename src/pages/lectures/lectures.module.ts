import { AsakimCoreModule } from './../../@core/core.module';
import { LectureFeedbacks } from './pages/lecture-details/feedbacks/feedbacks';
import { LectureDetails } from './pages/lecture-details/details/details';
import { LectureDetailsPage } from './pages/lecture-details/lecture-details';
import { PagesSharedModule } from './../@shared/shared.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LecturesPage } from './lectures';
import { LectureEvents } from './pages/lecture-details/events/events';

@NgModule({
  declarations: [
    LecturesPage,
    LectureDetailsPage,
    LectureDetails,
    LectureEvents,
    LectureFeedbacks
  ],
  imports: [
    AsakimCoreModule,
    PagesSharedModule,
    IonicPageModule.forChild(LecturesPage),
  ],
  entryComponents: [LectureDetailsPage]
})
export class LecturesPageModule { }
