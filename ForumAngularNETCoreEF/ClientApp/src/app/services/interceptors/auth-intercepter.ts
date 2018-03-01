import {Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('Intercepted request');
        // Clone the request to add the new header.
        const authReq = req.clone({ headers: req.headers.set('headerName', 'headerValue')});

        console.log('Sending request with new header now ...');

        return next.handle(authReq);
    }

}
