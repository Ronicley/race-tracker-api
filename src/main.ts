import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

(async () => {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  Logger.log('App running on port: http://localhost:3000');
})();
