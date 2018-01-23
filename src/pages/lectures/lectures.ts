import { LectureDetailsPage } from './pages/lecture-details/lecture-details';
import { TabStatus } from '../@shared/models/tabs/tab-status';
import { BaseTabPage } from './../@shared/common/base-tab-page';
// import { CreateTaskPage } from './../tasks/components/create-task-page/create-task-page.components';
import { SelectItem } from './../../@core/models/general/select-item';
import { PopoverOptions } from './../@shared/directives/popover-menu/models/popover-options';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Lecture } from '../@shared/models/lecture';

/**
 * Generated class for the LecturesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lectures',
  templateUrl: 'lectures.html',
  styles: ['./lectures.scss']
})
export class LecturesPage extends BaseTabPage<Lecture> implements OnInit {

  public lectureForm: FormGroup;
  public moreOptions: PopoverOptions;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, private fb: FormBuilder) {
    super([
      { label: 'הכל', value: 'all' },
      { label: 'פעיל', value: 'active' },
      { label: 'היסטוריה', value: 'history' },
    ], [
        new Lecture('הדרכה', 'נושא הדרכה ללוחם הצעיר', TabStatus.Active, 'בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה', 'בית ספר להדרכה, סניף מעוףת כתובת 24, א.ת. קרית מטלון, פתח-תקוה.', new Date().toISOString(), new Date().toISOString()),
        new Lecture('הדרכה', 'נושא הדרכה ללוחם הצעיר', TabStatus.Completed, 'בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה', 'בית ספר להדרכה, סניף מעוףת כתובת 24, א.ת. קרית מטלון, פתח-תקוה.', new Date().toISOString(), new Date().toISOString()),
        new Lecture('הדרכה', 'נושא הדרכה ללוחם הצעיר', TabStatus.Active, 'בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה', 'בית ספר להדרכה, סניף מעוףת כתובת 24, א.ת. קרית מטלון, פתח-תקוה.', new Date().toISOString(), new Date().toISOString()),
        new Lecture('הדרכה', 'נושא הדרכה ללוחם הצעיר', TabStatus.Completed, 'בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה', 'בית ספר להדרכה, סניף מעוףת כתובת 24, א.ת. קרית מטלון, פתח-תקוה.', new Date().toISOString(), new Date().toISOString()),
        new Lecture('הדרכה', 'נושא הדרכה ללוחם הצעיר', TabStatus.Active, 'בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה', 'בית ספר להדרכה, סניף מעוףת כתובת 24, א.ת. קרית מטלון, פתח-תקוה.', new Date().toISOString(), new Date().toISOString()),
        new Lecture('הדרכה', 'נושא הדרכה ללוחם הצעיר', TabStatus.Completed, 'בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה', 'בית ספר להדרכה, סניף מעוףת כתובת 24, א.ת. קרית מטלון, פתח-תקוה.', new Date().toISOString(), new Date().toISOString()),
      ]);

    this.initLectureForm();

    this.moreOptions = {
      popoverHeadline: 'משימה חדשה',
      popoverActions: [
        { text: 'תמונות', icon: null, link: 'http://adimobileserver.zapto.org:8080/VisualLearning/index.html', action: null },
        { text: 'וידאו', icon: null, link: 'http://adimobile.eternity.co.il/teo/videos.html', action: null },
        { text: 'אינטרקטיבי', icon: null, link: 'http://adimobile.eternity.co.il/teo/', action: null },
      ]
    };

  }

  ngOnInit(): void {
  }

  private initLectureForm() {
    this.lectureForm = this.fb.group({
      details: [{ value: null, disabled: false }, Validators.compose([Validators.required])],
      dueDate: [{ value: null, disabled: false }, Validators.compose([Validators.required])],
    })
  }

  public editLecture(l: Lecture) {
    l.open = !l.open;
    if (l.open) {
      this.lectureForm.controls['details'].setValue(l.details);
      this.lectureForm.controls['dueDate'].setValue(l.startDate);
    } else {

    }
  }

  public selectLecture(l: Lecture) {
    this.navCtrl.push(LectureDetailsPage, { lecture: l });
  }

  public updateLecture(l: Lecture) {
    const formVal = this.lectureForm.value;
    l.details = formVal.details;
    l.startDate = formVal.dueDate;
    this.initLectureForm();
    this.editLecture(l);
  }

  public addLecture() {
    // let modal = this.modalCtrl.create(CreateTaskPage);
    // modal.present();
  }


  // public tabChanged(v: string) {
  //   if (['all', 'active', 'history'].indexOf(v) >= 0) {
  //     this.selectedTabMode = v;
  //   }
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Lectures');
  }
}
