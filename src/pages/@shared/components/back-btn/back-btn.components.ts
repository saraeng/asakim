import { Component, OnInit, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'back-btn',
    templateUrl: 'back-btn.component.html',
    styles: ['back-btn.component.scss']
})
export class BackBtn implements OnInit {

    ngOnInit(): void {
    }

    constructor(public navCtrl: NavController){
        
    }

    
    public back() {
        this.navCtrl.canGoBack() ? this.navCtrl.pop() : null;
    }
}