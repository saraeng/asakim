import { MalamValidators } from './../../../@core/validators/malam.validators';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
    selector: 'page-user-settings-personal',
    templateUrl: 'personal.component.html',
})
export class PersonalSettingsPage {

    constructor(public navCtrl: NavController, public navParams: NavParams, fb: FormBuilder) {
        this.form = fb.group({
            'details': fb.group({

            }),
            'customer-details': fb.group({
                'customerType': [{ value: 'חברה', disabled: true }],
                'name': [{ value: 'high-tec', disabled: true }],
                'identity': [{ value: 'a15th-anc8-d6j9-55s7', disabled: true }],
                'identityType': [{ value: 'password', disabled: true }],
                'companyType': [{ value: 'חברת היי-טק', disabled: true }],
            }),
            'preferences': fb.group({
                'buisnessType': [{ value: 'חברה', disabled: true }],
                'identity': [{ value: '201233210', disabled: true }],
                'firstName': [{ value: 'יהונתן', disabled: true }],
                'lastName': [{ value: 'ענבי', disabled: true }],
                'image': [{ value: null, disabled: true }],
                'birthday': [{ value: new Date().toISOString(), disabled: true }],
                'gender': [{ value: 'זכר', disabled: true }],
                'expertise': [{ value: 'תכנות', disabled: true }],
                'lectorExpertise': [{ value: 'Umbraco', disabled: true }],
                'activityZones': [{ value: 'Umbraco', disabled: false }, Validators.compose([Validators.required])],

            }),
            'contact': fb.group({
                'phone': [{ value: null, disabled: false }, Validators.compose([Validators.required, MalamValidators.phone])],
                'email': [{ value: null, disabled: false }, Validators.compose([Validators.required, Validators.email])],
                'fax': [{ value: null, disabled: false }, Validators.compose([Validators.required, MalamValidators.phone])],
            }),
            'address': fb.group({
                'city': [{ value: 'צופים', disabled: true }],
                'street': [{ value: 'החרוב', disabled: true }],
                'homeNumber': [{ value: '183', disabled: true }],
                'appartment': [{ value: 'ב', disabled: true }],
                'postalCode': [{ value: '70500', disabled: true }],
                'mailNumber': [{ value: '758', disabled: true }],
                'area': [{ value: 2, disabled: true }],
            })
        });
    }

    public accordion: any[] = [
        { label: 'פרטי לקוח', component: 'customer-details', opened: false },
        { label: 'פרטי הספק', component: 'details', opened: false },
        { label: 'מאפייני הספק', component: 'preferences', opened: false },
        { label: 'פרטי קשר', component: 'contact', opened: false },
        { label: 'כתובת', component: 'address', opened: false },
    ];

    public form: FormGroup;

    ionViewDidLoad() {
        console.log('ionViewDidLoad UserSettingsPage');
    }

    public toggle(item: any) {

        item.opened = !item.opened;
        for (var i = 0; i < this.accordion.length; i++) {
            if (this.accordion[i] !== item) {
                this.accordion[i].opened = false;
            }
        }
    }

}
