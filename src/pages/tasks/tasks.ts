import { BaseTabPage } from './../@shared/common/base-tab-page';
import { CreateTaskPage } from './components/create-task-page/create-task-page.components';
import { PopoverOptions } from './../@shared/directives/popover-menu/models/popover-options';
import { Task } from './../@shared/models/task';
import { SmallTab } from './../@shared/components/small-tabs/models/small-tab';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { SelectItem } from '../../@core/models/general/select-item';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TabStatus } from '../@shared/models/tabs/tab-status';
import { listDictionary } from '../@shared/common/listDictionary';

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
export class TasksPage extends BaseTabPage<Task> implements OnInit {

  // public tabs: SelectItem[] = [];
  // public tasks: Task[] = [];
  // public selectedTabMode: string = 'all';
  public taskForm: FormGroup;
  public moreOptions: PopoverOptions;
  public tasksDic: listDictionary =new listDictionary();

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, private fb: FormBuilder) {
    super([
      { label: 'הכל', value: 'all' },
      { label: 'פעיל', value: 'active' },
      { label: 'היסטוריה', value: 'history' },
    ], [
        { type: 'מערכת', id: '1', details: 'בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה', dueDate: new Date().toISOString(), created: new Date().toISOString(), status: TabStatus.Active },
        { type: 'משתמש', id: '2', details: 'בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה', dueDate: new Date().toISOString(), created: new Date().toISOString(), status: TabStatus.Active },
        { type: 'מערכת', id: '3', details: 'בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה', dueDate: new Date().toISOString(), created: new Date().toISOString(), status: TabStatus.Completed },
        { type: 'מערכת', id: '4', details: 'בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה', dueDate: new Date().toISOString(), created: new Date().toISOString(), status: TabStatus.Active },
        { type: 'מערכת', id: '5', details: 'בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה', dueDate: new Date().toISOString(), created: new Date().toISOString(), status: TabStatus.Active },
        { type: 'משתמש', id: '6', details: 'בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה', dueDate: new Date().toISOString(), created: new Date().toISOString(), status: TabStatus.Active },
        { type: 'מערכת', id: '7', details: 'בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה', dueDate: new Date().toISOString(), created: new Date().toISOString(), status: TabStatus.Completed },
        { type: 'מערכת', id: '8', details: 'בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה', dueDate: new Date().toISOString(), created: new Date().toISOString(), status: TabStatus.Active },
        { type: 'מערכת', id: '9', details: 'בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה', dueDate: new Date().toISOString(), created: new Date().toISOString(), status: TabStatus.Active },
        { type: 'משתמש', id: '10', details: 'בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה', dueDate: new Date().toISOString(), created: new Date().toISOString(), status: TabStatus.Active },
        { type: 'מערכת', id: '11', details: 'בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה', dueDate: new Date().toISOString(), created: new Date().toISOString(), status: TabStatus.Completed },
        { type: 'מערכת', id: '12', details: 'בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה', dueDate: new Date().toISOString(), created: new Date().toISOString(), status: TabStatus.Active },
      ]);
    // this.tabs = [
    //   { label: 'הכל', value: 'all' },
    //   { label: 'פעיל', value: 'active' },
    //   { label: 'היסטוריה', value: 'history' },
    // ];
    // this.tasks = [
    //   { type: 'מערכת', open: false, details: 'בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה', dueDate: new Date().toISOString(), created: new Date().toISOString(), status: TabStatus.Active },
    //   { type: 'משתמש', open: false, details: 'בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה', dueDate: new Date().toISOString(), created: new Date().toISOString(), status: TabStatus.Active },
    //   { type: 'מערכת', open: false, details: 'בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה', dueDate: new Date().toISOString(), created: new Date().toISOString(), status: TabStatus.Completed },
    //   { type: 'מערכת', open: false, details: 'בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה', dueDate: new Date().toISOString(), created: new Date().toISOString(), status: TabStatus.Active },
    //   { type: 'מערכת', open: false, details: 'בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה', dueDate: new Date().toISOString(), created: new Date().toISOString(), status: TabStatus.Active },
    //   { type: 'משתמש', open: false, details: 'בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה', dueDate: new Date().toISOString(), created: new Date().toISOString(), status: TabStatus.Active },
    //   { type: 'מערכת', open: false, details: 'בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה', dueDate: new Date().toISOString(), created: new Date().toISOString(), status: TabStatus.Completed },
    //   { type: 'מערכת', open: false, details: 'בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה', dueDate: new Date().toISOString(), created: new Date().toISOString(), status: TabStatus.Active },
    //   { type: 'מערכת', open: false, details: 'בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה', dueDate: new Date().toISOString(), created: new Date().toISOString(), status: TabStatus.Active },
    //   { type: 'משתמש', open: false, details: 'בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה', dueDate: new Date().toISOString(), created: new Date().toISOString(), status: TabStatus.Active },
    //   { type: 'מערכת', open: false, details: 'בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה', dueDate: new Date().toISOString(), created: new Date().toISOString(), status: TabStatus.Completed },
    //   { type: 'מערכת', open: false, details: 'בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה', dueDate: new Date().toISOString(), created: new Date().toISOString(), status: TabStatus.Active },
    // ];

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
    this.tasksDic.toggle(t.id);
    // t.open = !t.open;
    // if (t.open) {
    if (this.tasksDic.getValue(t.id)) {
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


  // public tabChanged(v: string) {
  //   if (['all', 'active', 'history'].indexOf(v) >= 0) {
  //     this.selectedTabMode = v;
  //   }
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TasksPage');
  }

}
