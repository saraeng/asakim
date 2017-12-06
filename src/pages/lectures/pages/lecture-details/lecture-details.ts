import { Lecture } from './../../../@shared/models/lecture';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';
import { SelectItem } from '../../../../@core/models/general/select-item';
@Component({
    selector: 'page-lecture-details',
    templateUrl: 'lecture-details.html',
    styles: ['./lecture-details.scss']
})
export class LectureDetailsPage implements OnInit {
    public lecture: Lecture;
    public selectedTab: string;
    public tabs: SelectItem[] = [];
    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.lecture = navParams.get("lecture") as Lecture;
        this.tabs = [
            { label: 'פרטי הדרכה', value: 'details' },
            { label: 'מפגשים', value: 'events' },
            { label: 'משוב', value: 'feedbacks' },
        ];

        this.selectedTab = this.tabs[0].value;
    }

    ngOnInit(): void {

    }


    ionViewDidLoad() {
        console.log('ionViewDidLoad LectureDetailsPage');
    }

    public setTab(tValue: string) {
        const tab = this.tabs.find(x => x.value === tValue);
        if (!!tab) {
            this.selectedTab = tab.value;
        }
    }

    public back() {
        this.navCtrl.canGoBack() ? this.navCtrl.pop() : null;
    }

}
