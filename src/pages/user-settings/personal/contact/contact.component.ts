import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup } from '@angular/forms';
@Component({
    selector: 'user-settings-personal-contact',
    templateUrl: 'contact.component.html',
})
export class PersonalSettingsContact {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    @Input() public form: FormGroup;

    ionViewDidLoad() {
        console.log('ionViewDidLoad UserSettingsPage');
    }

}
