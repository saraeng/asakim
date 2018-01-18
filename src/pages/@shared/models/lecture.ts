import { SelectItem } from './../../../@core/models/general/select-item';

import { ITaber } from './tabs/itab';
import { TabStatus } from './tabs/tab-status';
export class Lecture implements ITaber {

    constructor(
        public type: string,
        public title: string,
        public status: TabStatus,
        public details: string,
        public location: string,
        public startDate: string | Date,
        public endDate: string | Date,
        public open: boolean = false,
        public events: LectureEvent[] = [],
        public feedbacks: LectureFeedback<any>[] = [],

    ) {
        this.generateEvents();
        this.generateFeedbacks();
    }


    private generateEvents() {
        this.events = [
            {
                subject: 'נושא המפגש',
                startDate: new Date().toISOString(),
                endDate: new Date(new Date().getTime() + 3 * 360).toISOString(),
                lecturer: "אנג'לה שפירא",
                subscribers: 18,
                participants: 16,
                isUserParticipant: true,
                syllabus: 'http://www.maof.co.il/'
            },
            {
                subject: 'נושא המפגש 2',
                startDate: new Date().toISOString(),
                endDate: new Date(new Date().getHours() + 3).toISOString(),
                lecturer: "מורן לוין",
                subscribers: 25,
                participants: 20,
                isUserParticipant: false,
                syllabus: 'http://www.maof.co.il/'
            }
        ];
    }
    private generateFeedbacks() {
        this.feedbacks = [
            {
                question: 'נושאים נוספים שהיית מעוניין/נת להרחיב את ידיעותיך',
                answer: 5,
                type: FeedbackType.Int,
                answers: [3, 3, 5, 4, 8, 5]
            }, {
                question: 'המלצות נוספות לשיפור',
                answer: 4,
                type: FeedbackType.Int,
                answers: [3, 3, 5, 4, 8, 5]
            }, {
                question: 'מהי ההערכה הכללית שלך לפעילות ההדרכה?',
                answer: 3,
                type: FeedbackType.Int,
                answers: [3, 3, 5, 4, 8, 5]

            }, {
                question: 'האם תהיה מעוניין לקבל שירותים נוספים מהמעוף?',
                answer: true,
                type: FeedbackType.Boolean,
                answers: [true, true, false, true]
            }, {
                question: 'פירוט שירותים נוספים',
                answer: 8,
                type: FeedbackType.Int,
                answers: [3, 3, 5, 4, 8, 5]
            }, {
                question: 'האם תרצה לקבל עדכונים שוטפים על פעילויות ושירותים של המעוף?',
                answer: false,
                type: FeedbackType.Boolean,
                answers: [true, true, false, true]
            }, {
                question: 'הערות',
                answer: 'יש למקד את החומר לפני השיעור',
                type: FeedbackType.Text,
                answers: ['true', 'true', 'false', 'true']

            },
        ];
    }
}

export class LectureEvent {
    subject: string;
    startDate: string;
    endDate: string;
    lecturer: string;
    subscribers: number;
    participants: number;
    isUserParticipant: boolean;
    syllabus: string;
}

export class LectureFeedback<T>{
    question: string;
    answer: T;
    type: FeedbackType = FeedbackType.Text;
    answers: T[] = [];

}

export enum FeedbackType {
    Boolean,
    Text,
    Int
}