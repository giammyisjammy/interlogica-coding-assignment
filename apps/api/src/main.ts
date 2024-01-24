import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(5001);
  // By default, Fastify listens only on the localhost 127.0.0.1 interface.
  // If you want to accept connections on other hosts, you should specify
  // '0.0.0.0' in the listen() call
  // await app.listen(3000, '0.0.0.0');
}
bootstrap();
