import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GoogleMapOptions, GoogleMap, GoogleMaps, GoogleMapsEvent } from '@ionic-native/google-maps';

/**
 * Generated class for the ContactUsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact-us',
  templateUrl: 'contact-us.html',
})
export class ContactUsPage {
  map: GoogleMap;

  constructor(public navCtrl: NavController, public navParams: NavParams, private googleMaps: GoogleMaps) {
  }

  ionViewDidLoad() {
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 43.0741904,
          lng: -89.3809802
        },
        zoom: 18,
        tilt: 30
      }
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);
    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        console.log('Map is ready!');

        // Now you can use all methods safely.
        this.map.addMarker({
          title: 'Ionic',
          icon: 'blue',
          animation: 'DROP',
          position: {
            lat: 43.0741904,
            lng: -89.3809802
          }
        })
          .then(marker => {
            marker.on(GoogleMapsEvent.MARKER_CLICK)
              .subscribe(() => {
                alert('clicked');
              });
          });

      });


  }

}
