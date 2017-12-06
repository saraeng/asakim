import { Lecture } from './../../../../@shared/models/lecture';
import { Component, OnInit, Input } from '@angular/core';
@Component({
    selector: 'lecture-details',
    templateUrl: 'details.html',
})
export class LectureDetails implements OnInit {

    @Input() lecture: Lecture;
    ngOnInit(): void {

    }
}
