import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Webtoon } from './webtoons.entity';
import { WebtoonRepository } from './webtoons.repository';

@Injectable()
export class WebtoonsService {
  constructor(
    @InjectRepository(WebtoonRepository)
    private webtoonRepository: WebtoonRepository,
  ) {}

  async all(): Promise<Webtoon[]> {
    return this.webtoonRepository.find();
  }

  async find(option: object) {
    return this.webtoonRepository.find(option);
  }
}
