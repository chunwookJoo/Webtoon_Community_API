import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as config from 'config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  // const serverConfig = config.get('server');
  const port = 3000;

  await app.listen(port);
  console.log(`listening on port ${port}`);
}
bootstrap();
