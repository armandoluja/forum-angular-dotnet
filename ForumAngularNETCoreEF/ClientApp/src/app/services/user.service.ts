import { Injectable, Inject } from '@angular/core';
import { Observable  } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../models/User';
import { CoreApiService } from './core-api.service';

@Injectable()
export class UserService extends CoreApiService {

    public getCSharpControllerName(): string {
        return 'Users';
    }

    public get(): Observable<User[]> {
        return this.http.get<User[]>(this.fullUrl)
            .pipe(
                catchError(this.handleError('getUsers', []))
            );
    }

    public getById(id: number): Observable<User> {
        return this.http.get<User>(this.fullUrl + id);
    }

    public post(user: User): Observable<User> {
        return this.http.post<User>(this.fullUrl, user);
    }

    public put(user: User): Observable<User> {
        return this.http.put<User>(this.fullUrl + user.id, user);
    }

}
