import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

@Injectable()
export abstract class CoreApiService {

    protected fullUrl: string;

    constructor (protected http: HttpClient, @Inject('BASE_URL') protected baseUrl: string) {
        this.fullUrl = baseUrl + 'api/' + this.getCSharpControllerName() + '/';
    }

    protected handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return Observable.of(result as T);
        };
    }

    /**
     * Must return the controller name for routing to
     * /api/{controller}/
     */
    public abstract getCSharpControllerName(): string;
}
