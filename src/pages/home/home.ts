import { ContactUsPage } from './../contact-us/contact-us';
import { PopoverOptions } from './../@shared/directives/popover-menu/models/popover-options';
import { TasksPage } from './../tasks/tasks';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Platform } from 'ionic-angular';
import { ListPage } from '../list/list';

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
      { title: 'המשימות שלי', page: TasksPage, icon: 'missions.JPG', size: 'full' }
    ],
    [
      { title: 'יועצים הממתינים לבחירה', page: ListPage, icon: 'missions.JPG', size: 'half' },
      { title: 'שירותי יעוץ', page: ListPage, icon: 'missions.JPG', size: 'half' }
    ],
    [
      { title: 'שעות יעוץ לאישור', page: ListPage, icon: 'missions.JPG', size: 'half' },
      { title: 'הדרכות', page: ListPage, icon: 'missions.JPG', size: 'half' }
    ],
    [
      { title: 'מימון', page: ListPage, icon: 'missions.JPG', size: 'half' },
      { title: 'מענקים', page: ListPage, icon: 'missions.JPG', size: 'half' }
    ],
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, private platform: Platform) {
    this.userOptions = {
      popoverHeadline: null,
      popoverActions: [
        {
          text: 'עזרה',
          icon: null,
          link: null,
          action: (popover: ViewController) => {
            popover.dismiss();
          }
        }, {
          text: 'צור קשר',
          icon: null,
          link: null,
          action: (popover: ViewController) => {
            this.navCtrl.push(ContactUsPage, {});
            popover.dismiss();
          }
        },
        {
          text: 'צא',
          icon: null,
          link: null,
          action: () => this.platform.exitApp()
        }
      ]
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  public openPage(p: any) {
    this.navCtrl.push(p, {}, { animate: true, animation: 'ios-transition', duration: 400, easing: 'ease-in-bounce', direction: 'forward' });
  }

}
