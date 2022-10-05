import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Comment } from './schema/comments.schema';
import { CommentsSchema } from './schema/comments.schema';
import { CommentsService } from './comments.service';
import { CommentsRepository } from './comments.repository';
import { CommentsController } from './comments.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Comment.name, schema: CommentsSchema }]),
  ],
  controllers: [CommentsController],
  providers: [CommentsService, CommentsRepository],
})
export class BoardsModule {}
