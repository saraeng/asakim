import { TabStatus } from './../../models/tabs/tab-status';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'tab-status',
    templateUrl: 'tab-status.component.html',
    styles: ['tab-status.component.scss']
})
export class TabStatusIndicator implements OnInit {

    @Input() public status: TabStatus;

    ngOnInit(): void {
    }
}