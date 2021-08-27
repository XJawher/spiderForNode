import { HttpService, Injectable } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const cheerio = require('cheerio');

type HashContentTitle = Map<string, Array<string>>
@Injectable()
export class DailyNewsService {

  constructor(
    private readonly httpService: HttpService,

  ) {
  }

  getByAxios(url: string, newsDate: string): Promise<HashContentTitle> {
    return new Promise((resolve, reject) => {
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
                contentList.push(element)
              }
            })
            resolve(this.contentFactory(contentList));
          } catch (error) {
            console.log(error);
            reject(error);
          }
        },
        (err) => {
          console.log(err);
          reject(err);
        }
      );
    })
  }


  /**
   * @description
   * 标题：同时满足 name:'strong' && next.data 存在 && data 不存在 当出现这个的时候，将 isTitleOrContent = title
   * 内容：满足 name 不存在 && data 存在，那么这时候就需要将内容锁打开。 isTitleOrContent = content
   * 后面要把数据中的 undefined 数据给过滤掉。
   * @author lipc
   * @date 14/07/2021
   * @private
   * @param {Array<any>} arr
   * @memberof SpiderService
   */
  private contentFactory(arr: Array<any>): HashContentTitle {
    const hashTitleContent = new Map();
    let titleTags = ''
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      if (element.name === 'strong' && element.children?.length && !element.next) {
        titleTags = element.children[0]?.data;
        if (titleTags !== undefined) {
          hashTitleContent.set(titleTags, []);
        }
      } else if (!element.name && element.data && titleTags !== undefined) {
        const hashContent = hashTitleContent.get(`${titleTags}`);
        hashContent.push(element.data)
        hashTitleContent.set(titleTags, hashContent);
      }
    }
    // console.log(hashTitleContent);
    // for (const [key, value] of hashTitleContent.entries()) {
    //   console.log(`标题 ${key}`);
    //   console.log(`${value.join()} \n`);
    // }
    return hashTitleContent;
  }
}

