## 快捷键
application		在 monorepo 中生成一个新应用程序(如果它是一个标准结构，则转换为 monorepo)。
library	lib	在 monorepo 中生成一个新库(如果是标准结构，则转换为 monorepo )。
class	cl	生成一个新类。
controller	co	生成控制器声明
decorator	d	生成自定义装饰器。
filter	f	生成过滤器声明。
gateway	ga	生成网关声明。
guard	gu	生成守卫声明。
interface		生成一个接口。
interceptor	in	生成一个拦截器声明。
middleware	mi	生成中间件声明。
module	mo	生成模块声明。
pipe	pi	生成管道声明。
provider	pr	生成提供者声明。
resolver	r	生成解析器声明。
service	s	生成服务声明。


nest g co testController
## 起服务

## 踩坑
### import 错误
在 vscode 中，import 语法会出现错误，因为 tsconfig.json 中的 "module": "commonjs"
将 eslint 中的   // project: 'tsconfig.json', 注释就可以了。

### 空大括号 eslint 报错
在 .vscode 中的 setting.json 中添加下面的这句
```json
 "typescript.format.insertSpaceAfterOpeningAndBeforeClosingEmptyBraces": false
```

### 添加新的路由
给项目增加新的路由，在 app.module.ts 的 controllers 中增加需要添加的新路由，这一点和 angular 很相似。

```ts
import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { AppService } from './app.service';
import { CitysController } from './controller/citys/citys.controller'; // 新的路由

@Module({
  imports: [],
  controllers: [AppController, CitysController],
  providers: [AppService],
})
export class AppModule {}

```
### Delete `␍`eslint
强类型的这个 nest 好麻烦啊，到处是检测报错的地方，真的是麻烦的一批。
在 eslintrc.js 中直接将 prettie 的东西直接注释掉。只留下 eslint 的。

```js
 extends: [
    'plugin:@typescript-eslint/recommended',
    // 'plugin:prettier/recommended',  prettier 的错误麻烦的很，这里就直接注释了
  ],
```
暂时未知会不会有其他的错误，因为这个报错是关于 Linux 和 windows 的格式的，可能在服务器上可能会出现这个啥异常错误，这里先不管，做个备注吧。

### 新增加路由
删除了 app.controller 以后，再新增一个 tags 的 controller 发现一直是 404 。

### get 方法获取参数
按照下面的方法，一直是获取不到参数。
```js
 @Get('test')
  name2(@Param() params: string): string {
    console.log(params);
    return 'test'
  }

// 使用这个方案就可以拿到 get 的参数了。
  @Get('test')
  name2(@Request() req): string {
    const { params, query } = req;
    console.log(params, query);
    return 'test'
  }
  // 下面的这个是更简单的方案
  @Get('get2')
  get2(@Query() query) {
    console.log(query);
    return 'test'
  }
```
### post 方法获取参数
```ts
  @Post('post')
  indexPsot(@Body() appDto: AppDto): string {
    console.log(appDto);
    return `{ post: '2122' }`
  }
```
使用上面的方法获取参数的时候，发现有个问题，就是我设置的 AppDto 的格式并没有起作用，目前原因未知，要获取到参数，还需要在 postman 里设置 Content-Type ： application/json。才可以实现获取 json 格式的参数目的。

### 校验参数
参数在校验的时候，按照官方的推荐，使用 class-validator 编写校验策略，然后再写一个管道，将校验的参数经过管道去校验。
说实话，这个参数的校验，用管道的话，是真的方便

### 自动的 log
需要做一个自动的 log ，将每次的请求操作都记录到数据库中，而且要自动，不能手动填充，目前能想到的需要进去的东西是
```
usename
path
updatetime
useclientmsg
```

### URL 中文解析
因为这次爬的 url 是带有中文的，浏览器中会自动转码
使用 encodeURIComponent 就可以直接转码。[encodeURIComponent 文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent)

```js
const title = '2021年7月11日新闻联播文字版'
const url = `http://mrxwlb.com/${encodeURIComponent(title)}/`;
return this.spiderService.getByAxios(url)
```

### vscode debug
1 设置 launch.json
```json
{
  // 使用 IntelliSense 了解相关属性。
  // 悬停以查看现有属性的描述。
  // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "name": "spider for news",
      "type": "node",
      "request": "attach",
      "restart": true,
      "processId": "${command:PickProcess}"
    }
  ]
}
```
2 点击 JavaScript Debug Terminal
3 然后在打开的 Terminal 中 yarn start:debug
按照上面的操作，就可以实现debug模式。
## 爬虫计划

## 文章结构

每日的新闻结构是这样的：

* xxx 和 xxx
* xxx
* 【xxx 标题】
* 国内快讯
* 国际 xxx
* 国际 xxx

在提取数据的时候，需要注意的是带有 【】 中括弧的数据，这说明是一个新的栏目的开始和上一个栏目的结束。