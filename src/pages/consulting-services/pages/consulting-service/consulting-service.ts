import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { SelectItem } from '../../../../@core/models/general/select-item';
import { PackageDetails } from './details/details';
import { ConsultantService } from '../../../@shared/models/consultantService';
@Component({
    selector: 'page-consulting-service',
    templateUrl: 'consulting-service.html',
    styles: ['./consulting-service.scss']
})
export class ConsultingServicePage implements OnInit {
    public package :ConsultantService;
    public selectedTab: string;
    public tabs: SelectItem[] = [];
    root = PackageDetails;
    constructor(public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams, private fb: FormBuilder) {
        this.package = navParams.get("consultantService") as ConsultantService;
        this.tabs = [
            { label: 'פרטים', value: 'details' },
            { label: 'תכנית עבודה', value: 'workPlan' },
            { label: 'קטגוריות לחבילה', value: 'categories' },
        ];

        this.selectedTab = this.tabs[0].value;
    }

    ngOnInit(): void {

    }


    ionViewDidLoad() {
        console.log('ionViewDidLoad ConsultingServicePage');
    }


}
