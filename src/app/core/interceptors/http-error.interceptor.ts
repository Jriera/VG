import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";

@Injectable(
    {providedIn: 'root'}
)
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      retry(1),
        catchError((error) => {
          console.log(error);
          return throwError(error);
        }
    ));

  }
}
