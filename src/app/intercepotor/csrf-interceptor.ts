import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpXsrfTokenExtractor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CSRFInterceptor implements HttpInterceptor {
  constructor(private csrfTokenExtractor: HttpXsrfTokenExtractor) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const csrfToken = this.csrfTokenExtractor.getToken();
    if (req.method !== 'POST' || !csrfToken) {
      return next.handle(req);
    }

    const headers = req.headers.append('X-XSRF-TOKEN', csrfToken);

    return next.handle(req.clone({ headers, withCredentials: true }));
  }
}
