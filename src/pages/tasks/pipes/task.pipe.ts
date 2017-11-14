import { Task, TaskStatus } from './../../@shared/models/task';
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'taskFilter' })
export class TaskFilter implements PipeTransform {
    transform(value: Task[], selectedMode: string): any[] {
        switch (selectedMode) {
            case 'active':
                return value.filter(x => x.status === TaskStatus.Active);
            case 'history':
                return value.filter(x => x.status === TaskStatus.Completed);
            case 'all':
            default:
                return value;

        }
    }
}