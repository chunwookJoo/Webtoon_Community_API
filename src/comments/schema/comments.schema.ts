import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from 'src/auth/schema/user.schema';

export type CommentsDocument = Comments & Document;
@Schema()
export class Comments {
  @Prop()
  id: string;

  @Prop({ required: true })
  comment: string;

  @Prop({ ref: User })
  author: string;

  @Prop()
  createdAt: Date;
}

export const CommentsSchema = SchemaFactory.createForClass(Comments);

CommentsSchema.virtual('comments', {
  ref: 'Comments',
  localField: '_id',
  foreignField: 'author',
});
