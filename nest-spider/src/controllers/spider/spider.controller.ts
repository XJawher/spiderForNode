import { Controller, Get } from '@nestjs/common';
import { getDaysByYearMonth } from 'src/utils/utils';
import { SpiderService } from "src/service/spider/spider.service"
/**
 * @description
 * @author lipc
 * @date 12/07/2021
 * @export
 * @class SpiderController
 *
 * 这里处理爬虫相关的代码
 * we handle code of spider on this ts file
 * 这里发起请求，将请求获取到的代码传入到 spider.server.ts 里。
 */
@Controller({ path: 'spider' })
export class SpiderController {

  constructor(private readonly spiderService: SpiderService) {
  }

  @Get("axios")
  getByAxios() {
    const title = '2021年7月12日新闻联播文字版';
    const yearsList = [2016, 2017, 2018, 2019, 2020, 2021];
    const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const dateLists = [];
    const dateMapList = {};


    for (let index = 0; index < yearsList.length; index++) {
      const year = yearsList[index];
      for (let j = 0; j < months.length; j++) {
        const month = months[j];
        const day = getDaysByYearMonth(year, month);
        dateLists.push({ year: year, month: month, days: day })
      }
    }


    for (let index = 0; index < dateLists.length; index++) {
      const date = dateLists[index];
      for (let j = 0; j < date.days; j++) {
        const title = `${date.year}年${date.month}月${j + 1}日新闻联播文字版`;
        dateMapList[`${date.year}_${date.month}_${j + 1}`] = { title, year: date.year, month: date.month, monthDays: date.days, today: j + 1 };
      }
    }

    // console.log(dateMapList);

    const url = `http://mrxwlb.com/${encodeURIComponent(title)}/`;
    return this.spiderService.getByAxios(url, '2021_7_11')
  }
}
