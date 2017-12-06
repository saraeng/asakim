import { ITaber } from './../models/tabs/itab';
import { SelectItem } from './../../../@core/models/general/select-item';
import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@Component({
    selector: 'base-tab-page',
    template: ``
})
export class BaseTabPage<T extends ITaber> {

    constructor(tabs: SelectItem[], items: T[]) {
        this.tabs = tabs;
        this.items = items;
        this.selectedTabMode = this.tabs[0].value;
    }

    protected tabs: SelectItem[] = [];
    protected items: T[] = [];
    public selectedTabMode: string = 'all';


    public tabChanged(v: string) {
        if (this.tabs.map(x => x.value as string).indexOf(v) >= 0) {
            this.selectedTabMode = v;
        }
    }
}