import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { User } from 'src/auth/schema/user.schema';
import { Board } from 'src/boards/schema/board.schema';

export type CommentsDocument = Comment & Document;
@Schema()
export class Comment {
  @Prop()
  id: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Board' })
  board_id: Board;

  @Prop({ required: true })
  comment: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  author: User;

  @Prop()
  createdAt: Date;
}

export const CommentsSchema = SchemaFactory.createForClass(Comment);
