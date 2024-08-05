import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envs } from './config/envs';
import { Logger, ValidationPipe } from '@nestjs/common';
import * as morgan from 'morgan';
import { RpcCustomExceptionFilter } from './common/exceptions/rpc-custom-exception.filter';

async function bootstrap() {
  const logger = new Logger('Main-Gateway');
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  app.useGlobalFilters(new RpcCustomExceptionFilter());
  app.use(morgan('dev'));
  await app.listen(envs.port);
  logger.log(`Gateway running on port: ${envs.port}`);
}
bootstrap();
