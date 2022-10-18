import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
// import * as config from 'config';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  // app.useStaticAssets(join(__dirname, '../public'), {
  //   prefix: '/public',
  // });
  app.useStaticAssets(join(__dirname, '../../storage'), {
    prefix: '/storage',
  });
  // const configService = app.get(ConfigService);
  // const PORT = configService.get<string>('server.port') || process.env.PORT;
  const PORT = process.env.PORT || 3000;
  await app.listen(PORT);
  console.log(`listening on port ${PORT}`);
}
bootstrap();
