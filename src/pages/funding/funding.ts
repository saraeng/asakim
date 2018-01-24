import { TabStatus } from './../@shared/models/tabs/tab-status';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { FundDetailsPage } from './pages/fund-details/fund-details';
import { CancelFundPage } from './components/cancel-fund/cancel-fund.component';
import { Fund } from '../@shared/models/fund';
@IonicPage()
@Component({
    selector: 'page-funding',
    templateUrl: 'funding.html',
    styles: ['./funding.scss']
})
export class FundingPage implements OnInit {

    public funds: Fund[] = [];

    constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    }


    public ngOnInit(): void {
        this.funds = [
            { status: TabStatus.Active, title: 'כותרת בקשת מימון', created: new Date().toISOString(), fundType: 'מענק נושא הלוואות', miktze: 'טקסט', dischargeTable: {name:'dischargeTable-1', path:'http://gahp.net/wp-content/uploads/2017/09/sample.pdf'}, loanRepaymentReason: 'טקסט', loanRepaymentEnabled: true },
            { status: TabStatus.Active, title: 'כותרת בקשת מימון', created: new Date().toISOString(), fundType: 'מענק נושא הלוואות', miktze: 'טקסט', dischargeTable: {name:'dischargeTable-1', path:'http://gahp.net/wp-content/uploads/2017/09/sample.pdf'}, loanRepaymentReason: '', loanRepaymentEnabled: true },
            { status: TabStatus.Completed, title: 'כותרת בקשת מימון', created: new Date().toISOString(), fundType: 'מענק נושא הלוואות', miktze: 'טקסט', dischargeTable: {name:'dischargeTable-1', path:'http://gahp.net/wp-content/uploads/2017/09/sample.pdf'}, loanRepaymentReason: '', loanRepaymentEnabled: false }
        ];
    }

    public selectFund(f){
        this.navCtrl.push(FundDetailsPage, { fund: f });
    }

    public cancelFund(f){
        let modal = this.modalCtrl.create(CancelFundPage, {fund:f});
        modal.present();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad FundingPage');
    }

}