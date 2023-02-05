import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoosePaginate from 'mongoose-paginate-v2';
import { Document } from 'mongoose';

export type WebtoonDocument = Webtoon & Document;

@Schema({ versionKey: false, id: false })
export class Webtoon {
  @Prop()
  _id: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  author: string;

  @Prop({ required: true })
  url: string;

  @Prop({ required: true })
  img: string;

  @Prop({ required: true })
  service: string;

  @Prop({ required: true })
  week: number[];

  @Prop({ required: true, type: Object })
  additional: WebtoonObject.Additional;
}

const schema = SchemaFactory.createForClass(Webtoon);
schema.plugin(mongoosePaginate);
export const WebtoonSchema = schema;
