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
                answer: '',
                type: FeedbackType.Text
            }, {
                question: 'המלצות נוספות לשיפור',
                answer: '',
                type: FeedbackType.Text
            }, {
                question: 'מהי ההערכה הכללית שלך לפעילות ההדרכה?',
                answer: '',
                type: FeedbackType.Text
            }, {
                question: 'האם תהיה מעוניין לקבל שירותים נוספים מהמעוף?',
                answer: '',
                type: FeedbackType.Boolean
            }, {
                question: 'פירוט שירותים נוספים',
                answer: '',
                type: FeedbackType.Text
            }, {
                question: 'האם תרצה לקבל עדכונים שוטפים על פעילויות ושירותים של המעוף?',
                answer: '',
                type: FeedbackType.Boolean
            }, {
                question: 'הערות',
                answer: '',
                type: FeedbackType.Text
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
}

export enum FeedbackType {
    Boolean,
    Text,
    Int
}