import { InAppBrowser } from '@ionic-native/in-app-browser';
import { IonicModule } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { SmallTabs } from './components/small-tabs/small-tabs.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AsakimCoreModule } from '../../@core/core.module';
import { PopoverMenuDirective } from './directives/popover-menu/popover-menu.directive';
import { PopoverMenuPage } from './directives/popover-menu/popover-menu-page/popover-menu-page';
import { ProgressBar } from './components/progress-bar/progress-bar.component';
import { NgxGaugeModule } from 'ngx-gauge';


@NgModule({
    imports: [
        IonicModule,
        BrowserModule,
        CommonModule,
        AsakimCoreModule,
        NgxGaugeModule
    ],
    declarations: [SmallTabs, PopoverMenuDirective, PopoverMenuPage, ProgressBar],
    exports: [CommonModule, BrowserModule, AsakimCoreModule, SmallTabs, PopoverMenuDirective, PopoverMenuPage, ProgressBar, NgxGaugeModule],
    providers: [InAppBrowser],
    entryComponents: [PopoverMenuPage]
})
export class PagesSharedModule {

}
