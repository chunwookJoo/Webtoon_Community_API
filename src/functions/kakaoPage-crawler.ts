import axios from 'axios';

interface KakaoPageWebtoon {
  title: string;
  image: string;
  badge: string;
  author: string;
  series_id: number;
}

/**
 * 연재중 웹툰, 완결 웹툰 크롤링
 * @param page
 * @param week 0~6 (월 ~ 일), 7 (완결)
 * @returns
 */
async function getWebtoons(
  page: number,
  week: number,
): Promise<WebtoonObject.CrawlerOutput[] | false> {
  try {
    const KAKAO_PAGE_URL = `https://api2-page.kakao.com/api/v2/store/day_of_week_top/list?category=10&subcategory=0&page=${page}&day=${
      week === 7 ? 12 : week + 1
    }`;
    const { data }: any = await axios.get(KAKAO_PAGE_URL);
    const webtoons: KakaoPageWebtoon[] = data.list;

    if (webtoons.length !== 0) {
      return webtoons.map((webtoon) => {
        const is_new = webtoon.badge === 'BT03';
        const is_up = webtoon.badge === 'BT02';
        return {
          title: webtoon.title,
          author: webtoon.author,
          url: `https://page.kakao.com/home?seriesId=${webtoon.series_id}`,
          img: `http://dn-img-page.kakao.com/download/resource?kid=${webtoon.image}&filename=th2`,
          service: 'kakao-page',
          week: week,
          additional: {
            new: is_new,
            rest: false, //휴재중인 웹툰이 없어서 확인 불가
            up: is_up,
            adult: false, //kakao page는 성인 웹툰 서비스X
          },
        };
      });
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
}

/**
 * 신작 웹툰 크롤링
 * @param page
 * @param week 0~6 (월 ~ 일)
 * @param newWeek 8 (신작)
 * @returns
 */
async function getNewWebtoons(
  page: number,
  week: number,
  newWeek: number,
): Promise<WebtoonObject.CrawlerOutput[] | false> {
  try {
    const KAKAO_PAGE_URL = `https://api2-page.kakao.com/api/v2/store/day_of_week_top/list?category=10&subcategory=0&page=${page}&day=${
      week + 1
    }`;
    const { data }: any = await axios.get(KAKAO_PAGE_URL);
    let webtoons: KakaoPageWebtoon[] = data.list;

    if (webtoons.length !== 0) {
      webtoons = webtoons.filter((webtoon) => webtoon.badge === 'BT03');
      return webtoons.map((webtoon) => {
        const is_new = webtoon.badge === 'BT03';
        const is_up = webtoon.badge === 'BT02';
        return {
          title: webtoon.title,
          author: webtoon.author,
          url: `https://page.kakao.com/home?seriesId=${webtoon.series_id}`,
          img: `http://dn-img-page.kakao.com/download/resource?kid=${webtoon.image}&filename=th2`,
          service: 'kakao-page',
          week: newWeek,
          additional: {
            new: is_new,
            rest: false, //휴재중인 웹툰이 없어서 확인 불가
            up: is_up,
            adult: false, //kakao page는 성인 웹툰 서비스X
          },
        };
      });
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
}

// 완결 웹툰
async function getOneDayWebtoons(weeknum: number) {
  try {
    const webtoons: WebtoonObject.CrawlerOutput[] = [];
    let page = 0;
    while (true) {
      const one_page_webtoonData = await getWebtoons(page, weeknum);
      if (!one_page_webtoonData) break;
      else {
        webtoons.push(...one_page_webtoonData);
        page++;
      }
    }
    return webtoons;
  } catch (error) {
    console.log(error);
  }
}

// 신작 웹툰
async function getNewDayWebtoons(weeknum: number, newWeekNum: number) {
  try {
    const webtoons: WebtoonObject.CrawlerOutput[] = [];
    let page = 0;
    while (true) {
      const one_page_webtoonData = await getNewWebtoons(
        page,
        weeknum,
        newWeekNum,
      );
      if (!one_page_webtoonData) break;
      else {
        webtoons.push(...one_page_webtoonData);
        page++;
      }
    }
    return webtoons;
  } catch (error) {
    console.log(error);
  }
}

// export default async function kakaoPageCrawler() {
//   try {
//     console.log('kakao-page crawler start');
//     const result: WebtoonObject.CrawlerOutput[] = [];
//     for (let i = 0; i < 7; i++) {
//       result.push(...(await getOneDayWebtoons(i)));
//       result.push(...(await getNewDayWebtoons(i, 8)));
//     }
//     result.push(...(await getOneDayWebtoons(7)));
//     console.log('kakao-page crawler end');
//     return result;
//   } catch (error) {
//     console.log(error);
//   }
// }
