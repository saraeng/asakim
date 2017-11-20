export class Task {
    type: string;
    status: TaskStatus;
    dueDate?: string | Date ;
    created: string | Date;
    open: boolean = false;
    details: string;
}

export enum TaskStatus {
    Active,
    Completed
}