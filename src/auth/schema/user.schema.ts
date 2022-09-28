import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import mongoose, { Document, ObjectId, Types } from 'mongoose';
import { Document, Types, Schema as MongooseSchema } from 'mongoose';
import { Webtoon } from 'src/webtoons/schemas/webtoon.schema';

export type UserDocument = User & Document;
@Schema()
export class User {
  @Prop()
  kakaoToken: string;

  @Prop()
  naverToken: string;

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

  // @Prop({ type: Object })
  // myWebtoon: Object;
}

export const UserSchema = SchemaFactory.createForClass(User);

// UserSchema.virtual('webtoon', {
//   ref: 'Webtoon',
//   localField: 'myWebtoon',
//   foreignField: '_id',
//   justOne: true,
// });
