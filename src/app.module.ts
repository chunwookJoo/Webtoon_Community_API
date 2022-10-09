require('dotenv').config();
import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
import { CommentsModule } from './comments/comments.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { WebtoonModule } from './webtoons/webtoons.module';
import { ServeStaticModule } from '@nestjs/serve-static';
// import config from 'config/config';
import { join } from 'path';

@Module({
  imports: [
    // ConfigModule.forRoot({
    //   load: [config],
    //   isGlobal: true,
    // }),
    MongooseModule.forRoot(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    BoardsModule,
    AuthModule,
    WebtoonModule,
    CommentsModule,
  ],
})
export class AppModule {}
