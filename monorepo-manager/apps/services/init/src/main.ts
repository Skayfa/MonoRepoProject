import { Logger } from '@nestjs/common';
import { NestApplicationContextOptions } from '@nestjs/common/interfaces/nest-application-context-options.interface';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

// Create logger
const logger = new Logger('Main');

// Options microservices
const options: NestApplicationContextOptions & MicroserviceOptions = {
  transport: Transport.TCP,
  options: {
    port: 8800,
    host: '127.0.0.1',
  },
};

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    options,
  );
  app.listen().then(() => {
    logger.log('listing');
  });
}
bootstrap();
