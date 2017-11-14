export class Task {
    type: string;
    title: string;
    status: TaskStatus;
    dueDate: Date;
    created: Date;
    open: boolean = false;
    details: string;
}

export enum TaskStatus {
    Active,
    Completed
}