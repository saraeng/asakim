import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'hebrewBoolean' })
export class HebrewBooleanFilter implements PipeTransform {
    transform(value: boolean): string {
        return !!value ? 'כן' : 'לא';
    }
}