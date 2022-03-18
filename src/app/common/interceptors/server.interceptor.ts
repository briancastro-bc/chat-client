import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';

@Injectable()
export class ServerInterceptor implements HttpInterceptor {

  private readonly server_endpoint: string = environment.server_endpoint;

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const req: HttpRequest<any> = request.clone({
      url: `${this.server_endpoint}/${request.url}`,
      withCredentials: true
    })
    return next.handle(req);
  }
}
