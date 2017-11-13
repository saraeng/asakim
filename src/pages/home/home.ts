import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  public rows: any[][] = [
    [
      { title: 'המשימות שלי', page: ListPage, icon: 'missions.jpg', size: 'full' }
    ],
    [
      { title: 'יועצים הממתינים לבחירה', page: ListPage, icon: 'missions.jpg', size: 'half' },
      { title: 'שירותי יעוץ', page: ListPage, icon: 'missions.jpg', size: 'half' }
    ],
    [
      { title: 'שעות יעוץ לאישור', page: ListPage, icon: 'missions.jpg', size: 'half' },
      { title: 'הדרכות', page: ListPage, icon: 'missions.jpg', size: 'half' }
    ],
    [
      { title: 'מימון', page: ListPage, icon: 'missions.jpg', size: 'half' },
      { title: 'מענקים', page: ListPage, icon: 'missions.jpg', size: 'half' }
    ],
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  public openPage(p: any){
    this.navCtrl.push(p);
  }

}
