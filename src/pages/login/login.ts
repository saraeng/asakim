import { MainPage } from './../main/main';
import { AccountService } from './../../@core/services/account.service';
import { MalamValidators } from './../../@core/validators/malam.validators';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage implements OnInit {
  public form: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder, private accountService: AccountService) {


  }

  ngOnInit(): void {
    if (!this.accountService.isLoggedIn()) {
      this.form = this.fb.group({
        'israelId': [{ value: null, disabled: false }, Validators.compose([MalamValidators.israelId, Validators.required])],
        'password': [{ value: null, disabled: false }, Validators.compose([Validators.required])],
      });
    } else {
      this.navCtrl.setRoot(MainPage, {});
    }
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  public login() {
    this.navCtrl.setRoot(MainPage, {});
    
    const formVal = this.form.value;
    this.accountService.login(formVal.israelId, formVal.password).toPromise().then(u => {
      if (!!u) {
        this.navCtrl.setRoot(MainPage, {});
      }
    });
  }

}
