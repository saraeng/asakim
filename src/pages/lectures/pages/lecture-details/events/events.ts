import { Lecture, LectureEvent } from './../../../../@shared/models/lecture';
import { Component, OnInit, Input } from '@angular/core';
@Component({
    selector: 'lecture-events',
    templateUrl: 'events.html',
})
export class LectureEvents implements OnInit {

    @Input() public lecture: Lecture;
    public projectedEvent: LectureEvent = null;
    public accordionIndexes: { [id: number]: boolean } = {};

    ngOnInit(): void {
        for (let i = 0; i < this.lecture.events.length; i++) {
            this.accordionIndexes[i] = false;
        }
    }

    public toggleAccordion(index: number) {
        const keys: string[] = Object.keys(this.accordionIndexes);
        for (let i = 0; i < keys.length; i++) {
            if (i !== index) {
                this.accordionIndexes[keys[i]] = false;
            }
        }
        this.accordionIndexes[index] = !this.accordionIndexes[index];
        this.projectedEvent = !!this.accordionIndexes[index] ? this.lecture.events[index] : null;
    }
}
