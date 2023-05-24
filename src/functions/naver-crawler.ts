import axios from 'axios';
import { load } from 'cheerio';

export default async function naver_crawler() {
  try {
    console.log('naver crawler start');
    const weekWebtoon = await get_weekWebtoon();
    const finishedWebtoon = await get_finishedWebtoon();
    const newWebtoon = await get_newWebtoon();
    console.log('naver crawler end');
    return weekWebtoon.concat(finishedWebtoon).concat(newWebtoon);
  } catch (error) {
    console.log(error);
  }
}

const NAVER_WEBTOON_URL = 'https://m.comic.naver.com';

async function get_weekWebtoon() {
  const result: WebtoonObject.CrawlerOutput[] = [];
  const weekArr = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  await Promise.all(
    weekArr.map(async (week, weekNum) => {
      result.push(
        ...(await get_webtoonData('weekday', `week=${week}`, weekNum)),
      );
    }),
  );
  return result;
}

async function get_finishedWebtoon() {
  const result: WebtoonObject.CrawlerOutput[] = [];
  const $ = await load_$(NAVER_WEBTOON_URL + '/webtoon/finish.nhn?page=1');
  const PAGE_COUNT_SELECTOR =
    '#ct > div.section_list_toon > div.paging_type2 > em > span';
  const pageCount = Number($(PAGE_COUNT_SELECTOR).text());
  for (let page = 1; page < pageCount; page++) {
    result.push(...(await get_webtoonData('finish', `page=${page}`, 7)));
  }

  return result;
}

async function get_newWebtoon() {
  const result: WebtoonObject.CrawlerOutput[] = [];
  const $ = await load_$(NAVER_WEBTOON_URL + '/bestChallenge/genre.nhn?page=1');
  const PAGE_COUNT_SELECTOR =
    '#ct > div.section_list_toon > div.paging_type2 > em > span';
  const pageCount = Number($(PAGE_COUNT_SELECTOR).text());
  for (let page = 1; page < pageCount; page++) {
    result.push(...(await get_webtoonData('new', `page=${page}`, 8)));
  }
  return result;
}

async function load_$(url: string) {
  const html: { data: string } = await axios.get(url);
  return load(html.data);
}

/**한 url에 표시되는 모든 웹툰 정보를 가지고오는 함수
 * @param type 웹툰의 종류(weekday, finish)
 * @param query 웹툰의 페이지 정보(week=mon, page=1)
 * @param weeknum 웹툰의 요일(0~6) / 완결(7) / 베스트도전(8)
 * @returns 표준 웹툰 정보 배열
 */

async function get_webtoonData(
  type: 'weekday' | 'finish' | 'new',
  query: string,
  weeknum: number,
): Promise<WebtoonObject.CrawlerOutput[]> {
  const $ = await load_$(
    type === 'new'
      ? `${NAVER_WEBTOON_URL}/bestChallenge/genre.nhn?${query}`
      : `${NAVER_WEBTOON_URL}/webtoon/${type}.nhn?${query}`,
  );
  const BASE_SELECTOR = '#ct > div.section_list_toon > ul > li > a';
  const base$ = $(BASE_SELECTOR);

  return base$
    .map((index, element) => {
      let isNew = false,
        isRest = false,
        isUp = false;
      const isAdult =
        $(element).find('div.thumbnail > span > span').attr('class') ===
        'badge adult'
          ? true
          : false;

      if (type === 'weekday') {
        const detail$ = $(element).find('div.info > span.detail > span');
        const detailInfo = detail$
          .map((index, element) =>
            $(element).attr('class').replace('bullet ', ''),
          )
          .get();
        isNew = detailInfo.includes('new');
        isRest = detailInfo.includes('break');
        isUp = detailInfo.includes('up');
      }
      const author = $(element)
        .find('.author')
        .text()
        .replace(/, |\ \/ /g, ',');

      return {
        title: $(element).find('.title').text(),
        author: author,
        url: NAVER_WEBTOON_URL + $(element).attr('href'),
        img: $(element).find('div.thumbnail > img').attr('src'),
        service: 'naver',
        week: weeknum,
        additional: {
          new: isNew,
          adult: isAdult,
          rest: isRest,
          up: isUp,
        },
      };
    })
    .get();
}
