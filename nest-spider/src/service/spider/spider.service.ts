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

  getByAxios(url) {

    this.httpService.get(url).subscribe(
      (response) => {

        try {
          const $ = cheerio.load(response.data)
          const daliyTitle = $("article").find("header").find("h1").text().trim();
          // const headers = article
          console.log(daliyTitle);
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
