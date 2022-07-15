import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {HttpHeadersInterceptor} from "./http-headers.interceptor";
import {HttpErrorInterceptor} from "./http-error.interceptor";

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpHeadersInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true }
];
