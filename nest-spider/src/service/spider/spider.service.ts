import { HttpService, Injectable } from '@nestjs/common';
// import cheerio from 'cheerio';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const cheerio = require('cheerio');


@Injectable()
export class SpiderService {
  private c: any;

  constructor(
    private readonly httpService: HttpService,

  ) {}

  getByAxios(url: string, newsDate: string) {
    this.httpService.get(url).subscribe(
      (response) => {
        try {
          const $ = cheerio.load(response.data)
          const daliyTitle = $("article")?.find("header")?.find("h1")?.text()?.trim();
          const entryContentSubTitle = $(".entry-content ul li")
          const entryContentDetail = $(".entry-content p")
          const subTitle = [];

          entryContentSubTitle.each(function () {
            console.log(this.firstChild.data);
          })

          entryContentDetail.each(function () {
            console.log(this.children);
            // 这里的 children 长度是 2 的时候，就是有副标题。
          })
        } catch (error) {
          console.log(error);
        }
      },
      (err) => {
        console.log(err);
      }
    );
    return { aaa: 11 };
  }

}
