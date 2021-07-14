import { HttpService, Injectable } from '@nestjs/common';
// import cheerio from 'cheerio';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const cheerio = require('cheerio');


@Injectable()
export class SpiderService {
  subTitleHashMap: Map<any, any>;

  constructor(
    private readonly httpService: HttpService,

  ) {
  }

  getByAxios(url: string, newsDate: string) {
    this.httpService.get(url).subscribe(
      (response) => {
        try {
          const $ = cheerio.load(response.data)
          const daliyTitle = $("article")?.find("header")?.find("h1")?.text()?.trim();
          const entryContentSubTitle = $(".entry-content ul li")
          const entryContentDetail = $(".entry-content p")
          const titleMap = new Map();
          entryContentSubTitle.each(function () {
            titleMap.set(this.firstChild.data, {});
          })

          const contentList = [];
          entryContentDetail.each(function () {
            for (let index = 0; index < this.children.length; index++) {
              const element = this.children[index];
              // 分两类：
              // 1 name 存在 且等于 strong，且 next 存在，那么 next.data 就是标题，这时候再去就需要做一件事，打标机
              // 让可以知道就是现在
              // 2 存在 data，那么不存在 name
              contentList.push(element)
            }
          })
          this.contentFactory(contentList);
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


  /**
   * @description
   * 标题：同时满足 name:'strong' && next.data 存在 && data 不存在 当出现这个的时候，将 isTitleOrContent = title
   * 内容：满足 name 不存在 && data 存在，那么这时候就需要将内容锁打开。 isTitleOrContent = content
   * @author lipc
   * @date 14/07/2021
   * @private
   * @param {Array<any>} arr
   * @memberof SpiderService
   */
  private contentFactory(arr: Array<any>) {
    const title = [];
    const hash = new Map();
    let titleTags = ''
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      if (element.name === 'strong' && element.children?.length && !element.next) {
        title.push(element.children[0]?.data)
        titleTags = element.children[0]?.data;
        hash.set(titleTags, []);
      } else if (!element.name && element.data) {
        const hashContent = hash.get(`${titleTags}`);
        hashContent.push(element.data)
        hash.set(titleTags, hashContent);
      }
    }
    console.log(hash);
  }
}
