import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { User } from 'src/auth/schema/user.schema';
import { Board } from 'src/boards/schema/board.schema';

export type CommentsDocument = Comment & Document;
@Schema()
export class Comment {
  @Prop({ required: true, ref: 'Board' })
  board_id: string;

  @Prop({ required: true })
  comment: string;

  @Prop({ required: true, ref: 'User' })
  author: string;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const CommentsSchema = SchemaFactory.createForClass(Comment);
