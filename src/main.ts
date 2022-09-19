import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
// import * as config from 'config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  // const configService = app.get(ConfigService);
  // const PORT = configService.get<string>('server.port') || process.env.PORT;
  const PORT = 5000 || process.env.PORT;
  await app.listen(PORT);
  console.log(`listening on port ${PORT}`);
}
bootstrap();
