
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'active-counter',
    templateUrl: 'active-counter.component.html',
    styles: ['active-counter.component.scss']
})
export class ActiveCounter implements OnInit {

    @Input() public counter: number;

    ngOnInit(): void {
    }
}