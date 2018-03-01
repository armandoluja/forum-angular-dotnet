import { Injectable, Inject } from '@angular/core';
import { Observable  } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { CoreApiService } from './core-api.service';
import { Post } from '../models/Post';

@Injectable()
export class PostService extends CoreApiService {

    public getCSharpControllerName(): string {
        return 'Posts';
    }

    public get(): Observable<Post[]> {
        return this.http.get<Post[]>(this.fullUrl)
            .pipe(
                catchError(this.handleError('getPosts', []))
            );
    }

    public getById(id: number): Observable<Post> {
        return this.http.get<Post>(this.fullUrl + id);
    }

    public post(post: Post): Observable<Post> {
        return this.http.post<Post>(this.fullUrl, post);
    }

    public put(post: Post): Observable<Post> {
        return this.http.put<Post>(this.fullUrl + post.id, post);
    }

}
