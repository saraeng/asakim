import { SelectItem } from './../../../@core/models/general/select-item';
import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup } from '@angular/forms';
@Component({
    selector: 'user-settings-push',
    templateUrl: 'push.component.html',
})
export class PushSettingsPage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }



    @Input() public items: SelectItem[];

    ionViewDidLoad() {
        console.log('ionViewDidLoad PushSettingsPage');
    }

}
