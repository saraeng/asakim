import { PopoverMenuPage } from './popover-menu-page/popover-menu-page';
import { PopoverController } from 'ionic-angular';
import { PopoverOptions } from './models/popover-options';
import { Directive, ElementRef, HostListener, Input } from '@angular/core';
@Directive({
    selector: '[popover]'
})
export class PopoverMenuDirective {

    @Input('popover') popover: PopoverOptions;
    @Input() showBack: boolean = false;
    @Input() centered: boolean = false;

    @HostListener('mouseup', ['$event'])
    onMouseUp(e: Event) {
        let popover = this.popoverCtrl.create(PopoverMenuPage, { //data to enter the NavParams in the PopoverMenuPage
            popoverActions: this.popover.popoverActions,
            popoverHeadline: this.popover.popoverHeadline,
            showBack: this.showBack,
        });
        popover.present({
            ev: !this.centered ? e : null
        });

    }

    constructor(el: ElementRef, private popoverCtrl: PopoverController) {

    }
}
