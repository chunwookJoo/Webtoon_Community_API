import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

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
}

export const UserSchema = SchemaFactory.createForClass(User);
