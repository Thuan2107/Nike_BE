import { ExceptionFilter, Catch, NotFoundException, ArgumentsHost, HttpException } from '@nestjs/common';

@Catch(NotFoundException)
export class NotFoundExceptionFilter implements ExceptionFilter {

  catch(exception: NotFoundException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    response
      .status(404)
      .json({
        statusCode: 404,
        message: 'Route Not Found',
        data: null
      });
  }
}
