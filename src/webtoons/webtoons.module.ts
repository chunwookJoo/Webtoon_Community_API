import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  AllPlatformController,
  KakaoController,
  KakaoPageController,
  NaverController,
  SearchController,
} from './webtoons.controller';
import { WebtoonRepository } from './webtoons.repository';

@Module({
  imports: [TypeOrmModule.forFeature([WebtoonRepository])],
  controllers: [
    // UpdateInfoController,
    SearchController,
    AllPlatformController,
    NaverController,
    KakaoController,
    KakaoPageController,
  ],
})
export class WebtoonModule {
  constructor() {}
}
