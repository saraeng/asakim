import { ValidatorFn, FormControl, AbstractControl } from "@angular/forms";
import { Dates } from '../helpers/date.helpers';

export class MalamValidators {
    public static validateEmail(c: FormControl) {
        let EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return EMAIL_REGEXP.test(c.value) ? null : {
            validateEmail: {
                valid: false
            }
        };
    }

    public static validateUrl(c: FormControl) {
        let REGEX = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;
        return !c.value || REGEX.test(c.value) || (c.value === "") ? null : {
            validateUrl: {
                valid: false
            }
        };
    }

    public static spaceAtStart(c: FormControl) {
        return c.value && c.value.length > 0 && c.value[0] === ' ' ? {
            spaceAtStart: {
                valid: false
            }
        } : null;
    }

    public static activeSibling(c: FormControl) {
        if (c.parent) {
            const activeChecked = c.parent.controls['active'].value;
            return !activeChecked ? {
                activeSibling: {
                    valid: false
                }
            } : null;
        }

        return null;
    }

    public static requiredIfActive(c: AbstractControl) {
        if (c.parent) {
            debugger;
            const activeChecked = c.parent.controls['active'].value;
            return activeChecked && !!c.value ? null : {
                requiredIfActive: false
            };
        }
        return null;
    }

    public static minLengthIfActive(minLength: number): ValidatorFn {
        return (c: AbstractControl) => {
            if (c.parent) {
                const activeChecked = c.parent.controls['active'].value;

                return activeChecked && !!c.value && c.value.length >= minLength ? null : {
                    minlength: {
                        valid: false
                    }
                };
            }
            return null;
        }
    }


    public static mobile(c: FormControl) {
        const phoneno = /^\d{10}$/;

        return (!c.hasError('required') && c.value.match(phoneno)) || (!c.hasError('required') && !c.value) ? null : {
            mobile: {
                valid: false
            }
        };
    }

    public static phone(c: FormControl) {
        const phoneno = /^\d{9}$/;

        return (!c.hasError('required') && c.value.match(phoneno)) || (!c.hasError('required') && !c.value) ? null : {
            phone: {
                valid: false
            }
        };
    }

    public static israelId(c: FormControl) {
        let isrVal = c.value + "";

        // Validate correct input
        if ((isrVal.length > 9) || (isrVal.length < 5))
            return {
                israelId: {
                    valid: false
                }
            };

        // The number is too short - add leading 0000
        if (isrVal.length < 9) {
            while (isrVal.length < 9) {
                isrVal = '0' + isrVal;
            }
        }

        // CHECK THE ID NUMBER
        var mone = 0, incNum;
        for (var i = 0; i < 9; i++) {
            incNum = Number(isrVal.charAt(i));
            incNum *= (i % 2) + 1;
            if (incNum > 9) {
                incNum -= 9;
            }
            mone += incNum;
        }

        return mone % 10 == 0 ? null : {
            israelId: {
                valid: false
            }
        };
    }

    // public static maxDate(c: FormControl, max: Date) {
    //     return new Date(c.value) < max ? null : {
    //         maxDate: {
    //             valid: false
    //         }
    //     };
    // }

    public static maxDate(max: Date): ValidatorFn {
        return (c: FormControl) => {
            const mDate: Date = max instanceof Date ? max : new Date((<any>max).target.value);
            return new Date(c.value) <= mDate ? null : {
                maxDate: {
                    valid: false
                }
            };
        }
    }

    public static maxDateRange(range: number, from: Date): ValidatorFn {
        return (c: FormControl) => {
            const d = new Date(from);
            const mDate: Date = Dates.addDays(d, range);
            return new Date(c.value) <= mDate ? null : {
                maxDateRange: {
                    valid: false
                }
            };
        }
    }

    public static fromOverlapTo(from: Date, to: Date): ValidatorFn {
        return (c: FormControl) => {

            const fromDate: Date = (from instanceof Date ? from : new Date((<any>from).target.value))
            if (!to || to >= fromDate) {
                return null;
            } else {
                return { fromOverlapTo: true };
            }
        }
    }
}