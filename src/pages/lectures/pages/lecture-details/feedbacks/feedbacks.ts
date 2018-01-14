import { Lecture, LectureFeedback } from './../../../../@shared/models/lecture';
import { Component, OnInit, Input } from '@angular/core';
import { Questionaire } from './questionaire';
@Component({
    selector: 'lecture-feedbacks',
    templateUrl: 'feedbacks.html',
})
export class LectureFeedbacks implements OnInit {

    @Input() lecture: Lecture;
    public accordionIndexes: { [id: number]: boolean } = {};
    public selectedFeedbackData: { [id: number]: number } = null;

    


    ngOnInit(): void {
        for (let i = 0; i < this.lecture.feedbacks.length; i++) {
            this.accordionIndexes[i] = false;
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
        this.selectedFeedbackData = !!this.accordionIndexes[index] ? this.buildFeedbackData(this.lecture.feedbacks[index]) : null;
    }

    private buildFeedbackData(feedback: LectureFeedback<any>): any {
        let model = {};
        for (let i = 0; i < feedback.answers.length; i++) {
            model[feedback.answers[i]] = (model[feedback.answers[i]] || 0) + 1;
        }
        return model;
    }

    public sumFeedbacks(): number{
        const keys = Object.keys(this.selectedFeedbackData);
        let sum: number = 0;
        for(let i = 0; i < keys.length; i++){
            sum += this.selectedFeedbackData[keys[i]];
        }

        return sum;
    }

}
