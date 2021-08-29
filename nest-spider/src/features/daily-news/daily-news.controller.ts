import { Body, Controller, Get, Post } from '@nestjs/common';
import { getDaysByYearMonth } from 'src/utils/utils';
import { DailyNewsService } from './daily-news.service';
import { CreateDailyNewsDto } from './dto/daily-news.dto';

@Controller({ path: 'daily_news' })
export class DailyNewsController {

  constructor(private readonly dailyNewsService: DailyNewsService) {
  }

  @Get("axios")
  async getByAxios() {
    // this.
    const title = '2019年3月12日新闻联播文字版';
    const yearsList = [2016, 2017, 2018, 2019, 2020, 2021];
    const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const dateLists = [];
    const dateMapList = {};

    // 标题列表 [2021_7_11,2021_7_11,2021_7_11,2021_7_11,]
    const titleList = [];

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
        titleList.push(`${date.year}_${date.month}_${j + 1}`)
      }
    }

    const url = `http://mrxwlb.com/${encodeURIComponent(title)}/`;
    const data = await this.dailyNewsService.getByAxios(url, '2021_7_11')
    const returnData = [];
    for (const [key, value] of data.entries()) {
      returnData.push({
        title: key,
        content: value
      })
    }
    const param: CreateDailyNewsDto = {
      timestampString: '2021_7_11',
      timestamp: new Date('2021-7-11').getTime(),
      titleHashContent: [],
    };

    for (const iterator of returnData) {
      param.titleHashContent.push({
        title: iterator.title,
        content: iterator.content
      })
    }
    console.log(param);

    const createResult = await this.dailyNewsService.create(param);
    return createResult;
  }

  @Post("create")
  async insertData(@Body() createDailyNewsDto: CreateDailyNewsDto) {
    const data = await this.dailyNewsService.create(createDailyNewsDto);
    return { test: data }
  }
}
