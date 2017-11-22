import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup } from '@angular/forms';
@Component({
    selector: 'user-settings-personal-customer-details',
    templateUrl: 'customer-details.component.html',
})
export class PersonalSettingsCustomerDetails {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    @Input() public form: FormGroup;

    ionViewDidLoad() {
        console.log('ionViewDidLoad UserSettingsPage');
    }

}

