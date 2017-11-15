import { PopoverOptions } from './../@shared/directives/popover-menu/models/popover-options';
import { Task, TaskStatus } from './../@shared/models/task';
import { SmallTab } from './../@shared/components/small-tabs/models/small-tab';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder) {
    this.tabs = [
      { label: 'הכל', value: 'all' },
      { label: 'פעיל', value: 'active' },
      { label: 'היסטוריה', value: 'history' },
    ];

    this.tasks = [
      { type: 'מערכת', open: false, details: 'בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה ', title: 'תוכן משימה', dueDate: new Date(), created: new Date(), status: TaskStatus.Active },
      { type: 'משתמש', open: false, details: 'בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה ', title: 'תוכן משימה ארוך', dueDate: new Date(), created: new Date(), status: TaskStatus.Active },
      { type: 'מערכת', open: false, details: 'בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה ', title: 'תוכן משימה ארוך מאוד', dueDate: new Date(), created: new Date(), status: TaskStatus.Completed },
      { type: 'מערכת', open: false, details: 'בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה ', title: 'תוכן משימה', dueDate: new Date(), created: new Date(), status: TaskStatus.Active },
      { type: 'מערכת', open: false, details: 'בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה ', title: 'תוכן משימה', dueDate: new Date(), created: new Date(), status: TaskStatus.Active },
      { type: 'משתמש', open: false, details: 'בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה ', title: 'תוכן משימה ארוך', dueDate: new Date(), created: new Date(), status: TaskStatus.Active },
      { type: 'מערכת', open: false, details: 'בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה ', title: 'תוכן משימה ארוך מאוד', dueDate: new Date(), created: new Date(), status: TaskStatus.Completed },
      { type: 'מערכת', open: false, details: 'בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה ', title: 'תוכן משימה', dueDate: new Date(), created: new Date(), status: TaskStatus.Active },
      { type: 'מערכת', open: false, details: 'בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה ', title: 'תוכן משימה', dueDate: new Date(), created: new Date(), status: TaskStatus.Active },
      { type: 'משתמש', open: false, details: 'בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה ', title: 'תוכן משימה ארוך', dueDate: new Date(), created: new Date(), status: TaskStatus.Active },
      { type: 'מערכת', open: false, details: 'בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה ', title: 'תוכן משימה ארוך מאוד', dueDate: new Date(), created: new Date(), status: TaskStatus.Completed },
      { type: 'מערכת', open: false, details: 'בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה ', title: 'תוכן משימה', dueDate: new Date(), created: new Date(), status: TaskStatus.Active },
    ];

    this.initTaskForm();
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


  public tabChanged(v: string) {
    if (['all', 'active', 'history'].indexOf(v) >= 0) {
      this.selectedTabMode = v;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TasksPage');
  }

}
