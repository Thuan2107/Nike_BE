import {
    NestInterceptor,
    Injectable,
    ExecutionContext,
    CallHandler,
  } from '@nestjs/common';
  import { Observable } from 'rxjs';
  import { map } from 'rxjs/operators';
  
  @Injectable()
  export class ResponseInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
      return next.handle().pipe(
        map((data) => ({
          message: 'Success', // You can customize this message as needed
          status: 200, // You can also customize this status based on the response
          data: data, // The actual data returned from the handler
        })),
      );
    }
  }
  