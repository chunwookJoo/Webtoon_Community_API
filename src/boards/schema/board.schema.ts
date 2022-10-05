import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, ObjectId } from 'mongoose';
import { User } from 'src/auth/schema/user.schema';
import { Comment } from 'src/comments/schema/comments.schema';
import { Webtoon } from 'src/webtoons/schemas/webtoon.schema';

export type BoardDocument = Board & Document;
@Schema()
export class Board {
  @Prop()
  id: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  author: User;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Webtoon' })
  webtoon: Webtoon;
}

export const BoardSchema = SchemaFactory.createForClass(Board);

// BoardSchema.virtual('user', {
//   ref: 'users',
//   localField: 'author',
//   foreignField: 'id',
//   justOne: true,
// });

// BoardSchema.virtual('webtoon', {
//   ref: 'webtoons',
//   localField: 'webtoon_id',
//   foreignField: '_id',
//   justOne: true,
// });

// BoardSchema.virtual('comment', {
//   ref: 'comments',
//   localField: 'id',
//   foreignField: 'id',
//   justOne: false,
// });
