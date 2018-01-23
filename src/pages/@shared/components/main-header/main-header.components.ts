
import { Component, OnInit, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../../../home/home';
import { ListPage } from '../../../list/list';
import { UserSettingsPage } from '../../../user-settings/user-settings';

@Component({
    selector: 'main-header',
    templateUrl: 'main-header.component.html',
    styles: ['main-header.component.scss']
})
export class MainHeader implements OnInit {

    @Input() public title: string;


    ngOnInit(): void {
    }
  
    constructor(public navCtrl: NavController) {

    }

    public showSettings() {
      this.navCtrl.push(UserSettingsPage, {}, { animate: true, animation: 'ios-transition', duration: 400, easing: 'ease-in-bounce', direction: 'forward' });
    }
  
}