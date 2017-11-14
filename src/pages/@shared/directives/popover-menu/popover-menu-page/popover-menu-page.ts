import { PopoverAction } from '../models/popover-action';
import { Component, Input } from '@angular/core';
import { ViewController, AlertController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the PopoverMorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  templateUrl: './popover-menu-page.html',
})
export class PopoverMenuPage {

  constructor(private viewCtrl: ViewController,
              private navParams: NavParams,
              private plt: Platform,
              private iab: InAppBrowser) {
    this.popoverActions = navParams.data.popoverActions;
    this.popoverHeadline = navParams.data.popoverHeadline;
    this.showBack = !!navParams.data.showBack;
  }

  public popoverActions: PopoverAction[] = [];
  public popoverHeadline: string = null;
  public showBack: boolean = false;
  public centered: boolean = false;

  execute(item: PopoverAction) {
    if (!!item.link) {
      this.iab.create(item.link,'_system').show();
      this.viewCtrl.dismiss();
    } else if (!!item.action) {
      item.action(this.viewCtrl);
    }
  }

  public dismiss() {
    this.viewCtrl.dismiss();
  }

}
