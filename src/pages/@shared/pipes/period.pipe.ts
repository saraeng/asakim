import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'period' })
export class PeriodFilter implements PipeTransform {
    transform(value: string[], selectedMode: string): string {
        if (value.length == 2) {
            const from: Date = new Date(value[0]);
            const to: Date = new Date(value[1]);
            const timeDiff = Math.abs(to.getTime() - from.getTime());
            const diffHours = Math.ceil(timeDiff / (1000 * 3600));
            // const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

            return diffHours + ' שעות';
        }

        return '0 שעות';
    }
}