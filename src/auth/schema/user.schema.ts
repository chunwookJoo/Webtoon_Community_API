import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Types, Schema as MongooseSchema } from 'mongoose';

export type UserDocument = User & Document;
@Schema()
export class User {
  @Prop()
  authToken: string;

  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  email: string;

  @Prop()
  profileImage: string;

  @Prop({ required: true })
  nickname: string;

  @Prop({ required: true })
  age: string;

  @Prop({ required: true })
  gender: string;

  @Prop()
  myWebtoon: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.virtual('comments', {
  ref: 'Comments',
  localField: '_id',
  foreignField: 'author',
});
