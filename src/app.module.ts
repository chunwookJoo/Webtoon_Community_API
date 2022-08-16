import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
import { ConfigModule } from '@nestjs/config';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
// import { typeORMConfig } from 'src/configs/config.typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      // load: [config],
      isGlobal: true,
    }),
    // TypeOrmModule.forRoot(typeORMConfig),
    MongooseModule.forRoot(process.env.MONGO_DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    BoardsModule,
    AuthModule,
  ],
})
export class AppModule {}
