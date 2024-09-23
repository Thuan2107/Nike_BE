import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { NotFoundExceptionFilter } from './NotFoundExceptionFilter';
import { ResponseInterceptor } from './response.intercepter';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new NotFoundExceptionFilter());
  app.useGlobalInterceptors(new ResponseInterceptor()); 
  app.enableShutdownHooks();
  await app.listen(3000);
}
bootstrap();
