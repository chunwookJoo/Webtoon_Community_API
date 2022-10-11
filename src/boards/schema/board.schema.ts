import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, ObjectId } from 'mongoose';
import { User } from 'src/auth/schema/user.schema';
import { Comment } from 'src/comments/schema/comments.schema';
import { Webtoon } from 'src/webtoons/schemas/webtoon.schema';

export type BoardDocument = Board & Document;
@Schema()
export class Board {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true, ref: 'User' })
  author: string;

  @Prop({
    required: true,
    ref: 'Webtoon',
  })
  webtoon: string;

  @Prop({ required: true })
  service: string;
}

export const BoardSchema = SchemaFactory.createForClass(Board);

// BoardSchema.virtual('comment', {
//   ref: 'comments',
//   localField: 'id',
//   foreignField: 'id',
//   justOne: false,
// });
