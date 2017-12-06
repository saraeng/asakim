import { TabStatus } from './../../@shared/models/tabs/tab-status';
import { Pipe, PipeTransform } from '@angular/core';
import { ITaber } from '../models/tabs/itab';


@Pipe({ name: 'tabFilter' })
export class TabFilter implements PipeTransform {
    transform(value: ITaber[], selectedMode: string): any[] {
        switch (selectedMode) {
            case 'active':
                return value.filter(x => x.status === TabStatus.Active);
            case 'history':
                return value.filter(x => x.status === TabStatus.Completed);
            case 'all':
            default:
                return value;

        }
    }
}