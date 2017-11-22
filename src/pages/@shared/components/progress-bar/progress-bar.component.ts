import { SelectItem } from './../../../../@core/models/general/select-item';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'progress-bar',
    templateUrl: 'progress-bar.component.html',
    styles: ['./progress-bar.component.scss']
})
export class ProgressBar {

    @Input() progress;

    constructor() {

    }
}