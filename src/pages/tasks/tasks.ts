import { PopoverOptions } from './../@shared/directives/popover-menu/models/popover-options';
import { Task, TaskStatus } from './../@shared/models/task';
import { SmallTab } from './../@shared/components/small-tabs/models/small-tab';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SelectItem } from '../../@core/models/general/select-item';

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
export class TasksPage {

  public tabs: SelectItem[] = [];
  public tasks: Task[] = [];
  public selectedTabMode: string = 'all';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
