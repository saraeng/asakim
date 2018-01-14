import { TabStatus } from './../@shared/models/tabs/tab-status';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Fund } from './fund';
@IonicPage()
@Component({
    selector: 'page-funding',
    templateUrl: 'funding.html',
    styles: ['./funding.scss']
})
export class FundingPage implements OnInit {

    public funds: Fund[] = [];

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }


    public ngOnInit(): void {
        this.funds = [
            { status: TabStatus.Active, title: 'כותרת בקשת מימון', created: new Date().toISOString(), fundType: 'מענק נושא הלוואות', miktze: 'טקסט', dischargeTable: 'http://gahp.net/wp-content/uploads/2017/09/sample.pdf', loanRepayment: 'טקסט' }
        ];
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad FundingPage');
    }

}