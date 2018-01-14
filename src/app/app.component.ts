import { FCM } from '@ionic-native/fcm';
import { LoginPage } from './../pages/login/login';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class AsakimApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = LoginPage;
  // rootPage: any = HomePage;
  
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private fcm: FCM) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      // if (this.platform.is('android') || this.platform.is('ios')) {
      //   this.fcmInit();
      // }

    });
  }

  private fcmInit() {
    this.fcm.subscribeToTopic('updates');
    this.fcm.getToken().then(token => {
      //backend.registerToken(token);
    });
    this.fcm.onNotification().subscribe(data => {
      if (data.wasTapped) {
        console.log("Received in background");
      } else {
        console.log("Received in foreground");
      };
    })

  }


}
