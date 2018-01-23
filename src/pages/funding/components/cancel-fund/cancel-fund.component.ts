import { NavParams, ViewController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
    selector: 'page-cancel-fund',
    templateUrl: 'cancel-fund.component.html',
    styles: ['cancel-fund.component.scss']
})
export class CancelFundPage {
    constructor(public viewCtrl: ViewController, public params: NavParams) {
       
    }
    
    dismiss() {
        this.viewCtrl.dismiss();
    }

    approve(){
        //TODO: service.deletefund()
        this.dismiss();
    }




}