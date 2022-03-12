import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, empty, throwError } from 'rxjs';
import { catchError, filter, switchMap, take } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  // tslint:disable-next-line: typedef
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Get the auth token from the service.
    const authToken: any = this.auth.getAccessToken();

    const authReq = this.addTokenToRequest(req, authToken);

    // not intercept login
    if (req.url.includes('/api/auth/signin')) {
      return next.handle(req);
    }
    // send cloned request with header to the next handler.
    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        // throw new Error(error?.error?.errorMessag
        return next.handle(req);
      })
    );
  }

  /**
   * Clone the request and replace the original headers with
   * cloned headers, updated with the authorization.
   * */
  private addTokenToRequest(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
