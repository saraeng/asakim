import { TabStatus } from './tabs/tab-status';
import { ITaber } from './tabs/itab';
export class Task implements ITaber {
    type: string;
    status: TabStatus;
    dueDate?: string | Date ;
    created: string | Date;
    open: boolean = false;
    details: string;
}