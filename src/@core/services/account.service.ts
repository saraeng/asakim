import { User } from './../models/account/user';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AccountService {
    public static readonly AUTH_KEY: string = "auth_token";

    constructor(private httpClient: HttpClient) {

    }

    private _user: User = null;

    public isLoggedIn() {
        return !!localStorage.getItem(AccountService.AUTH_KEY);
    }

    public login(username: string, password: string): Observable<User> {
        localStorage.setItem(AccountService.AUTH_KEY, JSON.stringify({ username: username, password: password }));
        return Observable.create(obs => {
            this.getUser().subscribe(x => {
                this._user = x;
                obs.next(this._user);
            });
            
        });
    }

    
    public getUser(): Observable<User> {
        return this.httpClient.get<User>('users');
    }

    public logout() {
        localStorage.removeItem(AccountService.AUTH_KEY);
    }
}