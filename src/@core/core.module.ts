import { KeysPipe } from './pipes/keys.pipe';
import { AsakimHttpInterceptor } from './services/asakim-http-interceptor.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AccountService } from './services/account.service';


@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
    ],
    exports: [HttpClientModule, KeysPipe],
    declarations: [KeysPipe],
    providers: [],
})
export class AsakimCoreModule { 
    static forRoot(): ModuleWithProviders {
        return <ModuleWithProviders>{
            ngModule: AsakimCoreModule,
            providers: [
                AccountService,
                AsakimHttpInterceptor
            ],
        };
    }


}
