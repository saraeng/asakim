import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup } from '@angular/forms';
@Component({
    selector: 'user-settings-personal-details',
    templateUrl: 'details.component.html',
})
export class PersonalSettingsDetails {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    @Input() public form: FormGroup;

    ionViewDidLoad() {
        console.log('ionViewDidLoad UserSettingsPage');
    }

}

