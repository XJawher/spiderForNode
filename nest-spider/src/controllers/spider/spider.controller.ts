import { Controller, Get } from '@nestjs/common';
import { SpiderService } from "../../service/spider/spider.service"
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

    const url = "http://mrxwlb.com/2021%e5%b9%b47%e6%9c%8811%e6%97%a5%e6%96%b0%e9%97%bb%e8%81%94%e6%92%ad%e6%96%87%e5%ad%97%e7%89%88/";
    return this.spiderService.getByAxios(url)
  }
}
