import { SelectItem } from './../../@core/models/general/select-item';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { trigger, transition, style, animate } from '@angular/animations';

/**
 * Generated class for the UserSettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-settings',
  templateUrl: 'user-settings.html',
  styles: ['./user-settings.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: '0', transform: 'translateY(130%)' }),
        animate('0.20s ease-out', style({ transform: 'translateY(0)', opacity: '1' })),
      ]),
      transition(':leave', [
        style({ opacity: '1', transform: 'translateY(0)' }),
        animate('0.20s ease-in', style({ opacity: '0', transform: 'translateY(130%)' })),
      ]),
    ]),
  ],
  

})
export class UserSettingsPage {

  public settingsFragments: any[] = [
    { title: 'פרטים אישיים', component: 'personal', active: true },
    { title: 'הדירוג שלי', component: 'score', active: false },
    { title: 'קבלת עדכונים מאפליקציה', component: 'push', active: false },
  ];

  public pushSettings: SelectItem[] = [
    { label: 'משימות חדשות', value: false },
    { label: 'משימות שטרם הושלמו', value: false },
    { label: 'הדרכות', value: false },
    { label: 'הכשרות', value: false },
    { label: 'עדכונים שוטפים של הסוכנות', value: false },
    { label: 'זיהוי שיחה נכנסת', value: false },
  ];

  public currentSettings: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public showAll: boolean = true;

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserSettingsPage');
    this.currentSettings = null;
  }

  public panEvent(e: any) {
    this.showAll = true;
    this.currentSettings = null;
  }

  public setCurrentSettings(e: any) {
    this.currentSettings = e;
    const currInd = this.settingsFragments.indexOf(e);
    const last = this.settingsFragments[this.settingsFragments.length - 1];
    const curr = this.settingsFragments[this.settingsFragments.indexOf(e)];
    this.settingsFragments[this.settingsFragments.length - 1] = curr;
    this.settingsFragments[currInd] = last;
    this.showAll = false;
  }
}
