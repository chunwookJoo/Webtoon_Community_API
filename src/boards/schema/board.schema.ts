import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BoardDocument = Board & Document;
@Schema()
export class Board {
  @Prop()
  id: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;
}

export const BoardSchema = SchemaFactory.createForClass(Board);
