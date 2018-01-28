import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Consultant } from '../@shared/models/consultant';
import { Alert } from 'ionic-angular/components/alert/alert';
// import { listDictionary } from '../@shared/common/listDictionary';

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
  public isConsultantChosen = false;
  // public consultantsDic: listDictionary =new listDictionary();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.consultants = [{
      id:'1', rate: 10, chosen: false, packNum: 35, hoursPerPack: 8, name: "משה פנדלוביץ", dueDate: new Date().toISOString(), specialization: "יועץ לניהול העסק", subSpecialization: "ניהול עסקים קטנים", contactDetails: {
        phone: "0548498850",
        email: "213shr@gmil.com",
        website: "www.abc.com",
        name: 'משה פנדלוביץ יועץ וניהול בע"מ'
      }
    },
    {
      id:'2', rate: 5, chosen: false, packNum: 35, hoursPerPack: 8, name: "משה פנדלוביץ", dueDate: new Date().toISOString(), specialization: "יועץ לניהול העסק", subSpecialization: "ניהול עסקים קטנים", contactDetails: {
        phone: "0548498850",
        email: "213shr@gmil.com",
        website: "www.abc.com",
        name: 'משה פנדלוביץ יועץ וניהול בע"מ'
      }
    },
    {
      id:'3', rate: 7, chosen: false, packNum: 35, hoursPerPack: 8, name: "משה פנדלוביץ", dueDate: new Date().toISOString(), specialization: "יועץ לניהול העסק", subSpecialization: "ניהול עסקים קטנים", contactDetails: {
        phone: "0548498850",
        email: "213shr@gmil.com",
        website: "www.abc.com",
        name: 'משה פנדלוביץ יועץ וניהול בע"מ'
      }
    }
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PendingConsultantsPage');
  }

  // public toggleContactDetails(c) {
  //   this.consultantsDic.toggle(c.id);
  // }

  public consultantChosen(c) {
    this.isConsultantChosen = true;
  }

}
