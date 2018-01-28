import { TabStatus } from './../@shared/models/tabs/tab-status';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { ConsultingServicePage } from './pages/consulting-service/consulting-service';
import { ConsultantService } from '../@shared/models/consultantService';
import { BaseTabPage } from '../@shared/common/base-tab-page';
@IonicPage()
@Component({
    selector: 'page-consulting-services',
    templateUrl: 'consulting-services.html',
    styles: ['./consulting-services.scss']
})
export class ConsultingServicesPage extends BaseTabPage<ConsultantService> implements OnInit {

    constructor(public navCtrl: NavController) {
        super([
            { label: 'הכל', value: 'all' },
            { label: 'פעיל', value: 'active' },
            { label: 'היסטוריה', value: 'history' },
          ],[
            {
                status: TabStatus.Active, packName: 'שם חבילה', dueDate: new Date().toISOString(), contactDetails: {
                    phone: "0548498850",
                    email: "213shr@gmil.com",
                    website: "www.abc.com",
                    name: 'משה פנדלוביץ יועץ וניהול בע"מ'
                }
            },
            {
                status: TabStatus.Completed, packName: 'שם חבילה', dueDate: new Date().toISOString(), contactDetails: {
                    phone: "0548498850",
                    email: "213shr@gmil.com",
                    website: "www.abc.com",
                    name: 'משה פנדלוביץ יועץ וניהול בע"מ'
                }
            }, {
                status: TabStatus.Active, packName: 'שם חבילה', dueDate: new Date().toISOString(), contactDetails: {
                    phone: "0548498850",
                    email: "213shr@gmil.com",
                    website: "www.abc.com",
                    name: 'משה פנדלוביץ יועץ וניהול בע"מ'
                }
            },
            {
                status: TabStatus.Active, packName: 'שם חבילה', dueDate: new Date().toISOString(), contactDetails: {
                    phone: "0548498850",
                    email: "213shr@gmil.com",
                    website: "www.abc.com",
                    name: 'משה פנדלוביץ יועץ וניהול בע"מ'
                }
            }]);
        }


    public ngOnInit(): void {
        
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ConsultingServicesPage');
    }

}