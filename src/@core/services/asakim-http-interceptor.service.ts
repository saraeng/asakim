import { AccountService } from './account.service';
import { Observable } from 'rxjs/Rx';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class AsakimHttpInterceptor implements HttpInterceptor {
    constructor() {
    }

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const credentials = JSON.parse(localStorage.getItem(AccountService.AUTH_KEY) || '{}');
        if (!!credentials) {
            return next.handle(req.clone({
                headers: req.headers
                    .set('Authorization', "Basic " + btoa(credentials.username + ":" + credentials.password))
            }));
        }
        return next.handle(req);
    }
}
