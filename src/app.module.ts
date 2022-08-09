import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
import { ConfigModule } from '@nestjs/config';
import config from './config/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './config/config.typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    BoardsModule,
    ConfigModule.forRoot({
      load: [config],
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(typeORMConfig),
    AuthModule,
  ],
})
export class AppModule {}
