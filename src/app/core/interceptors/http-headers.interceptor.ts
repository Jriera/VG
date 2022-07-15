import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()

export class HttpHeadersInterceptor implements HttpInterceptor {
  constructor() {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      req=req.clone({
        setHeaders: {
          'Content-Type': 'application/json',
        },
        setParams:{
          key: 'ff2714b4ea4b4ad1a05e76a01b144b29'
        }
      });
      return next.handle(req);
    }

}
