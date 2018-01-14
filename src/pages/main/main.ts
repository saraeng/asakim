import { HomePage } from './../home/home';
import { ListPage } from './../list/list';
import { Component, ViewChild } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
  styles: ['./main.scss']
})
export class MainPage {
  @ViewChild(Nav) nav: Nav;

  // rootPage: any = LoginPage;
  rootPage: any = HomePage;
  public pages: Array<{ title: string, component: any }>;

  constructor(public navCtrl: NavController) {
    this.pages = [
      { title: 'List', component: ListPage }
    ];

  }


  public openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.push(page.component, {}, { animate: true, animation: 'ios-transition', duration: 500, easing: 'ease-in-out', direction: 'left' });
  }





}
