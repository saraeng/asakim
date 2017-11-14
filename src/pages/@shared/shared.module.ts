import { IonicModule } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { SmallTabs } from './components/small-tabs/small-tabs.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AsakimCoreModule } from '../../@core/core.module';
import { PopoverMenuDirective } from './directives/popover-menu/popover-menu.directive';
import { PopoverMenuPage } from './directives/popover-menu/popover-menu-page/popover-menu-page';

@NgModule({
    imports: [
        IonicModule,
        BrowserModule,
        CommonModule,
        AsakimCoreModule
    ],
    declarations: [SmallTabs, PopoverMenuDirective, PopoverMenuPage, PopoverMenuDirective],
    exports: [CommonModule, BrowserModule, AsakimCoreModule, SmallTabs, PopoverMenuDirective, PopoverMenuPage, PopoverMenuDirective],
    providers: [],
})
export class PagesSharedModule {

}
