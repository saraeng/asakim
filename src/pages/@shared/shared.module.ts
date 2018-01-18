import { HebrewBooleanFilter } from './pipes/hebrew-bool.pipe';
import { PeriodFilter } from './pipes/period.pipe';
import { TabStatusIndicator } from './components/tab-status/tab-status.components';
import { BaseTabPage } from './common/base-tab-page';
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
import { TabFilter } from './pipes/tab.pipe';
import { ActiveCounter } from './components/active-counter/active-counter..components';


const COMMON_COMPONENTS = [BaseTabPage];
const PIPES = [TabFilter, PeriodFilter, HebrewBooleanFilter];
const COMPONENTS = [TabStatusIndicator, SmallTabs, PopoverMenuDirective, ProgressBar, ActiveCounter];
const ENTRY_COMPONENTS = [PopoverMenuPage];

@NgModule({
    imports: [
        IonicModule,
        BrowserModule,
        CommonModule,
        AsakimCoreModule,
        NgxGaugeModule
    ],
    declarations: [BaseTabPage, ...PIPES, ...COMMON_COMPONENTS, ...ENTRY_COMPONENTS, ...COMPONENTS],
    exports: [
        CommonModule,
        BrowserModule,
        AsakimCoreModule,
        NgxGaugeModule,
        ...PIPES,
        ...COMMON_COMPONENTS,
        ...ENTRY_COMPONENTS,
        ...COMPONENTS
    ],
    providers: [InAppBrowser],
    entryComponents: [...ENTRY_COMPONENTS]
})
export class PagesSharedModule {

}
