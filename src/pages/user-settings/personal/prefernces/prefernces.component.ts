import { SelectItem } from './../../../../@core/models/general/select-item';
import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup } from '@angular/forms';
@Component({
    selector: 'user-settings-personal-prefernces',
    templateUrl: 'prefernces.component.html',
})
export class PersonalSettingsPrefernces {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }


    @Input() public form: FormGroup;
    public activityZones: SelectItem[] = [
        { label: 'צפון', value: 0 },
        { label: 'מרכז', value: 1 },
        { label: 'שפלה', value: 2 },
        { label: 'דרום', value: 3 },
        { label: 'גוש דן', value: 4 },
    ];

    ionViewDidLoad() {
        console.log('ionViewDidLoad UserSettingsPage');
    }

}
