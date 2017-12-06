import { Lecture } from './../../../../@shared/models/lecture';
import { Component, OnInit, Input } from '@angular/core';
@Component({
    selector: 'lecture-feedbacks',
    templateUrl: 'feedbacks.html',
})
export class LectureFeedbacks implements OnInit {

    @Input() lecture: Lecture;
    ngOnInit(): void {

    }
}
