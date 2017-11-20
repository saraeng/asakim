import { NavParams, IonicPage, ViewController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
    selector: 'page-create-task',
    templateUrl: 'create-task-page.component.html',
    styles: ['create-task-page.component.scss']
})
export class CreateTaskPage {
    constructor(public viewCtrl: ViewController, public params: NavParams) {
        debugger;
        // console.log('UserId', params.get('userId'));
      }
     
}