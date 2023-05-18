import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Webtoon, WebtoonDocument } from './schemas/webtoon.schema';

@Injectable()
export class WebtoonsService {
  constructor(
    @InjectModel(Webtoon.name)
    private readonly webtoonModel: Model<WebtoonDocument>,
  ) {}

  async findAll(): Promise<Webtoon[]> {
    return this.webtoonModel.find().exec();
  }

  async getWebtoonList(option: any) {
    const limit = 18;
    let page = parseInt(option.page) || 1;
    let offset = (page - 1) * limit;

    return this.webtoonModel.find(option).limit(limit).skip(offset);
  }

  async getSearchWebtoonList(option: any) {
    const limit = 18;
    let page = parseInt(option.page) || 1;
    let offset = (page - 1) * limit;

    return this.webtoonModel.find(option).limit(limit).skip(offset);
  }

  async getWebtoon(id: string) {
    return this.webtoonModel.findById(id);
  }
}
