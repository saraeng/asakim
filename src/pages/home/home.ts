import { FundingPage } from './../funding/funding';
import { ContactUsPage } from './../contact-us/contact-us';
import { PopoverOptions } from './../@shared/directives/popover-menu/models/popover-options';
import { TasksPage } from './../tasks/tasks';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Platform } from 'ionic-angular';
import { ListPage } from '../list/list';
import { UserSettingsPage } from '../user-settings/user-settings';
import { LecturesPage } from '../lectures/lectures';
import { PendingConsultantsPage } from '../pending-consultants/pending-consultants';
import { ConsultingServicesPage } from '../consulting-services/consulting-services';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  public userOptions: PopoverOptions;

  public rows: any[][] = [
    [
      { title: 'המשימות שלי', page: TasksPage, icon: 'icon-14.png', size: 'full', css: 'big' }
    ],
    [
      { title: 'יועצים הממתינים לבחירה', page: PendingConsultantsPage, icon: 'icon-15.png', size: 'half' },
      { title: 'שירותי יעוץ', page: ConsultingServicesPage, icon: 'icon-16.png', size: 'half' }
    ],
    [
      { title: 'שעות יעוץ לאישור', page: ListPage, icon: 'icon-10.png', size: 'half' },
      { title: 'הדרכות', page: LecturesPage, icon: 'icon-13.png', size: 'half' }
    ],
    [
      { title: 'מימון', page: FundingPage, icon: 'icon-19.png', size: 'half' },
      { title: 'מענקים', page: ListPage, icon: 'icon-7.png', size: 'half' }
    ],
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, private platform: Platform) {
    // this.userOptions = {
    //   popoverHeadline: null,
    //   popoverActions: [
    //     {
    //       text: 'עזרה',
    //       icon: null,
    //       link: null,
    //       action: (popover: ViewController) => {
    //         popover.dismiss();
    //       }
    //     }, {
    //       text: 'צור קשר',
    //       icon: null,
    //       link: null,
    //       action: (popover: ViewController) => {
    //         this.navCtrl.push(ContactUsPage, {});
    //         popover.dismiss();
    //       }
    //     },
    //     {
    //       text: 'צא',
    //       icon: null,
    //       link: null,
    //       action: () => this.platform.exitApp()
    //     }
    //   ]
    // };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  public openPage(p: any) {
    this.navCtrl.push(p, { }, { animate: true, animation: 'ios-transition', duration: 400, easing: 'ease-in-bounce', direction: 'forward' });
  }

  public goToContactUsPage(p: any) {
    this.navCtrl.push(ContactUsPage, { }, { animate: true, animation: 'ios-transition', duration: 400, easing: 'ease-in-bounce', direction: 'forward' });
  }

  

  public showSettings() {
    this.navCtrl.push(UserSettingsPage, {}, { animate: true, animation: 'ios-transition', duration: 400, easing: 'ease-in-bounce', direction: 'forward' });
  }

}
