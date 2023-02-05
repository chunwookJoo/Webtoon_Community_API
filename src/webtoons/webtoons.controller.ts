import { Controller, Get, Param, Query, Req } from '@nestjs/common';
import { WebtoonsService } from './webtoons.service';
import { removeSpecialChars } from 'src/functions/common-function';
class WebtoonsController {
  constructor(
    private readonly webtoonsService: WebtoonsService,
    platform: string,
  ) {
    platform !== 'all' && (this.serviceOption.service = platform);
  }
  private serviceOption: { service?: string } = {};
  platform: string;
  @Get('/')
  async all() {
    return this.webtoonsService.getWebtoonList(this.serviceOption);
  }

  @Get('new')
  async new(@Query('page') page: string) {
    return this.webtoonsService.getWebtoonList({
      ...this.serviceOption,
      week: { $in: [8] },
      page,
    });
  }

  @Get('finished')
  async finished(@Query('page') page: string) {
    return this.webtoonsService.getWebtoonList({
      ...this.serviceOption,
      week: { $in: [7] },
      page,
    });
  }

  @Get('week')
  async week(@Query('day') day: string, @Query('page') page: string) {
    const dayNum = Number(day);

    if (!day)
      return this.webtoonsService.getWebtoonList({
        ...this.serviceOption,
        week: { $in: [7] },
        page,
      });

    if (0 <= dayNum && dayNum <= 6)
      return this.webtoonsService.getWebtoonList({
        ...this.serviceOption,
        week: { $in: [dayNum] },
        page,
      });

    return {
      statusCode: 400,
      message: 'Invalid day value',
      error: 'Not Found',
    };
  }
}

@Controller('search')
export class SearchController {
  constructor(private readonly webtoonsService: WebtoonsService) {}
  @Get()
  async search(@Query(`keyword`) keyword: string) {
    if (!!keyword) {
      keyword = keyword.replace(/%20/g, '');
      keyword = removeSpecialChars(keyword);
      const result = this.webtoonsService.getSearchWebtoonList({
        _id: { $regex: `${keyword}[^naver|kakao|kakao-page]+`, $options: 'i' },
      });
      return (await result).length !== 0
        ? result
        : {
            statusCode: 404,
            message: 'There is no webtoon that matches.',
            error: 'Not Found',
          };
    } else
      return {
        statusCode: 500,
        message:
          'Required request variable does not exist or request variable name is invalid.',
        error: 'Error',
      };
  }

  @Get('webtoon/:id')
  async getWebtoon(@Param('id') id: string) {
    return this.webtoonsService.getWebtoon(id);
  }
}

@Controller('/api/all')
export class AllPlatformController extends WebtoonsController {
  constructor(_super: WebtoonsService) {
    super(_super, 'all');
  }
}

@Controller('/api/naver')
export class NaverController extends WebtoonsController {
  constructor(_super: WebtoonsService) {
    super(_super, 'naver');
  }
}

@Controller('/api/kakao')
export class KakaoController extends WebtoonsController {
  constructor(_super: WebtoonsService) {
    super(_super, 'kakao');
  }
}

@Controller('/api/kakao-page')
export class KakaoPageController extends WebtoonsController {
  constructor(_super: WebtoonsService) {
    super(_super, 'kakao-page');
  }
}
