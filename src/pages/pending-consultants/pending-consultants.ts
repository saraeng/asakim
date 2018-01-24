import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Consultant } from '../@shared/models/consultant';

/**
 * Generated class for the PendingConsultantsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pending-consultants',
  templateUrl: 'pending-consultants.html',
})
export class PendingConsultantsPage {
  public consultants: Consultant[] = [];
  public consultantChosen = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.consultants = [{
      rate: 10, open: false, chosen: false, packNum: 35, hoursPerPack: 8, name: "משה פנדלוביץ", dueDate: new Date().toISOString(), specialization: "יועץ לניהול העסק", subSpecialization: "ניהול עסקים קטנים", contactDetails: {
        phone: "0548498850",
        email: "213shr@gmil.com",
        website: "www.abc.com"
      }
    },
    {
      rate: 5, open: false, chosen: false, packNum: 35, hoursPerPack: 8, name: "משה פנדלוביץ", dueDate: new Date().toISOString(), specialization: "יועץ לניהול העסק", subSpecialization: "ניהול עסקים קטנים", contactDetails: {
        phone: "0548498850",
        email: "213shr@gmil.com",
        website: "www.abc.com"
      }
    },
    {
      rate: 7, open: false, chosen: false, packNum: 35, hoursPerPack: 8, name: "משה פנדלוביץ", dueDate: new Date().toISOString(), specialization: "יועץ לניהול העסק", subSpecialization: "ניהול עסקים קטנים", contactDetails: {
        phone: "0548498850",
        email: "213shr@gmil.com",
        website: "www.abc.com"
      }
    }
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PendingConsultantsPage');
  }

  public toggleContactDetails(c) {
    c.open = !c.open
  }

  public chooseConsultant(c) {
    this.consultantChosen = true;
    c.chosen = true;
  }
}
