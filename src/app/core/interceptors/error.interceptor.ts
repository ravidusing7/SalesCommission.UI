import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';

import { Injectable } from '@angular/core';

import {
  Observable,
  throwError
} from 'rxjs';

import {
  catchError
} from 'rxjs/operators';

import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private router: Router
  ) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    return next.handle(request).pipe(

      catchError((error: HttpErrorResponse) => {

        switch (error.status) {

          case 401:

            localStorage.clear();
            this.router.navigate(['/login']);
            break;

          case 403:

            alert('Access Denied.');
            break;

          case 500:

            alert('Internal Server Error.');
            break;

          default:

            alert(error.message);
            break;

        }

        return throwError(() => error);

      })

    );

  }

}