import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from 'src/configs/config.typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    BoardsModule,
    ConfigModule.forRoot({
      // load: [config],
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(typeORMConfig),
    AuthModule,
  ],
})
export class AppModule {}
