import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CancelFundPage } from '../../components/cancel-fund/cancel-fund.component';
import { Fund } from '../../../@shared/models/fund';
@Component({
    selector: 'page-fund-details',
    templateUrl: 'fund-details.html',
    styles: ['./fund-details.scss']
})
export class FundDetailsPage implements OnInit {
    public fund: Fund;
    public loanRepaymentSegmentOpen: boolean = false;
    public loanRepaymentForm: FormGroup;

    constructor(public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams, private fb: FormBuilder) {
        this.fund = navParams.get("fund") as Fund;
        this.loanRepaymentForm = this.fb.group({
            reason: [{ value: null, disabled: false }, Validators.compose([Validators.required])],
        })
    }

    ngOnInit(): void {

    }


    ionViewDidLoad() {
        console.log('ionViewDidLoad FundDetailsPage');
    }

    public cancelFund(f){
        let modal = this.modalCtrl.create(CancelFundPage, {fund:f});
        modal.present();
    }

    public loanRepaymentSegmentToggle(){
        this.loanRepaymentSegmentOpen=!this.loanRepaymentSegmentOpen;
    }

    public sendLoanRepayment(r){
        const formVal = this.loanRepaymentForm.value;
        this.fund.loanRepaymentReason = formVal.reason;
        this.loanRepaymentSegmentOpen=false;
    }

}
