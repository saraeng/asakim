import { Component, Input, AfterViewChecked, OnDestroy } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup } from '@angular/forms';
import { SelectItem } from '../../../@core/models/general/select-item';
@Component({
    selector: 'user-settings-score',
    templateUrl: 'score.component.html',
})
export class ScoreSettingsPage implements OnDestroy {


    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.showGauge = true;
    }
    public showGauge: boolean = false;
    public gauge: any = { value: 82 };

    @Input() public items: SelectItem[] = [
        { label: 'דירוג UI שלי 10', value: 82 },
        { label: 'דירוג UI שלי 10', value: 82 },
    ];
    @Input() public animate: boolean = true;
    
    ngOnDestroy(): void {
        this.showGauge = false;
        this.gauge = null;
    }
}
