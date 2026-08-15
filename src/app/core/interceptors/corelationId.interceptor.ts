import { HttpInterceptor,HttpRequest,HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CorrelationIdService } from '../services/correlationId.service';

@Injectable()
export class CorrelationIdInterceptor implements HttpInterceptor {

  constructor(
    private readonly correlationIdService: CorrelationIdService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ) {

    const correlationId =
      this.correlationIdService.get();

    if (!correlationId) {
      return next.handle(request);
    }

    const clonedRequest = request.clone({
      setHeaders: {
        'X-Correlation-ID': correlationId
      }
    });

    return next.handle(clonedRequest);
  }
}