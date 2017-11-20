import { CreateTaskPage } from './components/create-task-page/create-task-page.components';
import { PopoverOptions } from './../@shared/directives/popover-menu/models/popover-options';
import { Task, TaskStatus } from './../@shared/models/task';
import { SmallTab } from './../@shared/components/small-tabs/models/small-tab';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { SelectItem } from '../../@core/models/general/select-item';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the TasksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html',
  styles: ['./tasks.scss']
})
export class TasksPage implements OnInit {

  public tabs: SelectItem[] = [];
  public tasks: Task[] = [];
  public selectedTabMode: string = 'all';
  public taskForm: FormGroup;
  public moreOptions: PopoverOptions;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, private fb: FormBuilder) {
    this.tabs = [
      { label: 'הכל', value: 'all' },
      { label: 'פעיל', value: 'active' },
      { label: 'היסטוריה', value: 'history' },
    ];

    this.tasks = [
      { type: 'מערכת', open: false, details: 'בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה ', dueDate: new Date().toISOString(), created: new Date().toISOString(), status: TaskStatus.Active },
      { type: 'משתמש', open: false, details: 'בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה ', dueDate: new Date().toISOString(), created: new Date().toISOString(), status: TaskStatus.Active },
      { type: 'מערכת', open: false, details: 'בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה ', dueDate: new Date().toISOString(), created: new Date().toISOString(), status: TaskStatus.Completed },
      { type: 'מערכת', open: false, details: 'בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה ', dueDate: new Date().toISOString(), created: new Date().toISOString(), status: TaskStatus.Active },
      { type: 'מערכת', open: false, details: 'בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה ', dueDate: new Date().toISOString(), created: new Date().toISOString(), status: TaskStatus.Active },
      { type: 'משתמש', open: false, details: 'בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה ', dueDate: new Date().toISOString(), created: new Date().toISOString(), status: TaskStatus.Active },
      { type: 'מערכת', open: false, details: 'בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה ', dueDate: new Date().toISOString(), created: new Date().toISOString(), status: TaskStatus.Completed },
      { type: 'מערכת', open: false, details: 'בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה ', dueDate: new Date().toISOString(), created: new Date().toISOString(), status: TaskStatus.Active },
      { type: 'מערכת', open: false, details: 'בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה ', dueDate: new Date().toISOString(), created: new Date().toISOString(), status: TaskStatus.Active },
      { type: 'משתמש', open: false, details: 'בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה ', dueDate: new Date().toISOString(), created: new Date().toISOString(), status: TaskStatus.Active },
      { type: 'מערכת', open: false, details: 'בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה ', dueDate: new Date().toISOString(), created: new Date().toISOString(), status: TaskStatus.Completed },
      { type: 'מערכת', open: false, details: 'בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה ', dueDate: new Date().toISOString(), created: new Date().toISOString(), status: TaskStatus.Active },
    ];

    this.initTaskForm();

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

  private initTaskForm() {
    this.taskForm = this.fb.group({
      details: [{ value: null, disabled: false }, Validators.compose([Validators.required])],
      dueDate: [{ value: null, disabled: false }, Validators.compose([Validators.required])],
    })
  }

  public editTask(t: Task) {
    t.open = !t.open;
    if (t.open) {
      this.taskForm.controls['details'].setValue(t.details);
      this.taskForm.controls['dueDate'].setValue(t.dueDate);
    } else {

    }
  }

  public updateTask(t: Task) {
    const formVal = this.taskForm.value;
    t.details = formVal.details;
    t.dueDate = formVal.dueDate;
    this.initTaskForm();
    this.editTask(t);
  }

  public addTask() {
    let modal = this.modalCtrl.create(CreateTaskPage);
    modal.present();
  }


  public tabChanged(v: string) {
    if (['all', 'active', 'history'].indexOf(v) >= 0) {
      this.selectedTabMode = v;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TasksPage');
  }

}
