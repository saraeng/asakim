import { Component, OnInit, Input } from '@angular/core';
import { TaskStatus } from '../../../@shared/models/task';

@Component({
    selector: 'task-status',
    templateUrl: 'task-status.component.html',
    styles: ['task-status.component.scss']
})
export class TaskStatusIndicator implements OnInit {

    @Input() public status: TaskStatus;

    ngOnInit(): void {
    }
}