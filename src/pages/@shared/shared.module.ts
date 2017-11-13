import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AsakimCoreModule } from '../../@core/core.module';

@NgModule({
    imports: [
        CommonModule,
        AsakimCoreModule
    ],
    exports: [CommonModule, AsakimCoreModule],
    declarations: [],
    providers: [],
})
export class PagesSharedModule { 

}
