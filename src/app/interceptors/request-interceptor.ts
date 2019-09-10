import {Injectable} from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor() {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const baseUrl = environment.apiUrl;

    const newReq = req.clone({url: baseUrl + req.url});

    return next.handle(newReq);
  }
}
