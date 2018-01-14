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
    public selectedItems: { [id: number]: boolean } = {};
    public allItemsSelected: boolean = false;
    public silabosVisible: boolean = false;

    ngOnInit(): void {
        for (let i = 0; i < this.lecture.events.length; i++) {
            this.accordionIndexes[i] = false;
            this.selectedItems[i] = false;
        }
    }

    public toggleAccordion(index: number) {
        debugger;
        const keys: string[] = Object.keys(this.accordionIndexes);
        for (let i = 0; i < keys.length; i++) {
            if (i !== index) {
                this.accordionIndexes[keys[i]] = false;
            }
        }
        this.accordionIndexes[index] = !this.accordionIndexes[index];
        this.projectedEvent = !!this.accordionIndexes[index] ? this.lecture.events[index] : null;
    }

    public showSilabos() {
        this.silabosVisible = !this.silabosVisible;
    }

    public itemSelected(i: number) {
        this.selectedItems[i] = !this.selectedItems[i];
        const keys: string[] = Object.keys(this.selectedItems);
        let allChecked = true;
        for (let i = 0; i < keys.length; i++) {
            if (!this.selectedItems[keys[i]]) {
                allChecked = false;
                break;
            }
        }
        this.allItemsSelected = allChecked;
    }

    public selectAll() {
        this.allItemsSelected = !this.allItemsSelected;
        const keys: string[] = Object.keys(this.selectedItems);
        for (let i = 0; i < keys.length; i++) {
            this.selectedItems[keys[i]] = this.allItemsSelected;
        }
    }
}
