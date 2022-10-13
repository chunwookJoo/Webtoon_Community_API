import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UpdateInfo, UpdateInfoSchema } from './schemas/update-info.schema';
import { Webtoon, WebtoonSchema } from './schemas/webtoon.schema';
import { UpdateInfoController } from './update-info.controller';
import { UpdateInfoService } from './update-info.service';
import {
  AllPlatformController,
  KakaoController,
  KakaoPageController,
  NaverController,
  SearchController,
} from './webtoons.controller';
import { WebtoonsService } from './webtoons.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Webtoon.name, schema: WebtoonSchema },
      { name: UpdateInfo.name, schema: UpdateInfoSchema },
    ]),
  ],
  controllers: [
    UpdateInfoController,
    SearchController,
    AllPlatformController,
    NaverController,
    KakaoController,
    KakaoPageController,
  ],
  providers: [WebtoonsService, UpdateInfoService],
  // providers: [WebtoonsService],
})
export class WebtoonModule {
  constructor() {}
}
