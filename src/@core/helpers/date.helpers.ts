export class Dates {
    public static monthNames: string[] = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    public static daysInMonth(month: number, year: number): number {
        return new Date(year, month, 0).getDate();
    }

    public static addDays(date: Date, days: number): Date {
        date.setDate(date.getDate() + days);
        return date;
    }

    public static addHours(date: Date, hours: number): Date {
        let days: number = parseInt((hours / 24).toString());
        if (!!days) {
            Dates.addDays(date, days);
            hours = hours % 24;
        }
        date.setHours(date.getHours() + hours);
        return date;
    }


    public static daysRange(from: Date, to: Date): number {
        let day = 24 * 60 * 60 * 1000;
        return Math.round(Math.abs((from.getTime() - to.getTime()) / (day)));
    }

    public static asOffsetDateString(date: Date, offset: string): string {
        // let year: number = date.getFullYear();
        // let month: number = date.getMonth() + 1;
        // let day: number = date.getDate();
        // let hours: number = date.getHours();
        // let minutes: number = date.getMinutes();
        // let seconds: number = date.getSeconds();
        let isoDateStr: string = date.toISOString();
        if (offset.indexOf('.') > 0 && offset.length > 3) {
            let splited: string[] = offset.substring(0, 4).replace('.', ':').split(':');
            if (splited && splited[0] && splited[0].replace('-', '').replace('+', '').length === 1) {
                splited[0] = splited[0].replace('-', '-0').replace('+', '+0');
                if (splited[0].length === 1) {
                    splited[0] = '0' + splited[0];
                }
                if (splited[1] && splited[1].length == 1) {
                    splited[1] = splited[1] + '0';
                }
                offset = splited.join(':');
            }
            offset = offset.substring(0, offset.indexOf('-') >= 0 ? 6 : 5);
        }
        if (offset.indexOf('-') < 0) {
            offset = '+' + offset;
        }
        return isoDateStr.substring(0, isoDateStr.indexOf('Z')) + ' ' + offset;
        // return year + '-' + Dates.addZeroIfNeeded(month) + '-' + Dates.addZeroIfNeeded(day) + ' ' +
        //        Dates.addZeroIfNeeded(hours) + ':' + Dates.addZeroIfNeeded(minutes) + ':' + Dates.addZeroIfNeeded(seconds) + ' +' + offset;
    }

    public static getLocalTimezone(): string {
        const timezone = Dates.getLocalTimezoneValue() * -1;

        return timezone + '.00:00:00';
    }

    public static getLocalTimezoneValue(): number {
        return new Date().getTimezoneOffset() / 60;
    }

    public static addZeroIfNeeded(num: number): string {
        return num >= 10 ? (num + '') : '0' + num;
    }

    public static getMonthName(month: number): string{
        return Dates.monthNames[month];
    }
}
