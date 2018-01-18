import { TabStatus } from './../../../@shared/models/tabs/tab-status';
import { Task } from './../../../@shared/models/task';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavParams, ViewController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
    selector: 'page-create-task',
    templateUrl: 'create-task-page.component.html',
    styles: ['create-task-page.component.scss']
})
export class CreateTaskPage {
    public taskForm: FormGroup;
    constructor(public viewCtrl: ViewController, public params: NavParams, private fb: FormBuilder) {
        this.taskForm = this.fb.group({
            details: [{ value: null, disabled: false }, Validators.compose([Validators.required])],
            dueDate: [{ value: null, disabled: false }, Validators.compose([Validators.required])],
        })
        // console.log('UserId', params.get('userId'));
    }


    addTask() { 
        const formVal = this.taskForm.value;
        let t:Task = {type: 'משתמש', open: false, details: formVal.details, dueDate: formVal.dueDate, created: new Date().toISOString(), status: TabStatus.Active};
        this.dismiss();
    }

    dismiss() {
        let data = {};
        this.viewCtrl.dismiss(data);
    }


}