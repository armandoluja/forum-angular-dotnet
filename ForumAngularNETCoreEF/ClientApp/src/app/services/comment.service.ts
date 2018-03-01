import { Injectable, Inject } from '@angular/core';
import { Observable  } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { CoreApiService } from './core-api.service';
import { Comment } from '../models/Comment';

@Injectable()
export class CommentService extends CoreApiService {

    public getCSharpControllerName(): string {
        return 'Comments';
    }

    public getCommentsForPost(postId: number): Observable<Comment[]> {
        return this.http.get<Comment[]>(this.fullUrl + 'GetCommentsForPost/' + postId)
            .pipe(
                catchError(this.handleError('GetCommentsForPost', []))
            );
    }

    public getById(id: number): Observable<Comment> {
        return this.http.get<Comment>(this.fullUrl + id);
    }

    public post(comment: Comment): Observable<Comment> {
        return this.http.post<Comment>(this.fullUrl, comment);
    }

    public put(comment: Comment): Observable<Comment> {
        return this.http.put<Comment>(this.fullUrl + comment.id, comment);
    }

}
