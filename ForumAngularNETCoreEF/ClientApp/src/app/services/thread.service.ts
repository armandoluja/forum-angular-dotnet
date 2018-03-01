import { Injectable, Inject } from '@angular/core';
import { Observable  } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { Thread } from '../models/Thread';
import { CoreApiService } from './core-api.service';

@Injectable()
export class ThreadService extends CoreApiService {

    public getCSharpControllerName(): string {
        return 'Threads';
    }

    public get(): Observable<Thread[]> {
        return this.http.get<Thread[]>(this.fullUrl)
            .pipe(
                catchError(this.handleError('getThreads', []))
            );
    }

    public getById(id: number): Observable<Thread> {
        return this.http.get<Thread>(this.fullUrl + id);
    }

    public post(thread: Thread): Observable<Thread> {
        return this.http.post<Thread>(this.fullUrl, thread);
    }

    public put(thread: Thread): Observable<Thread> {
        return this.http.put<Thread>(this.fullUrl + thread.id, thread);
    }

}
