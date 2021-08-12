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
## 官方结构
官方推荐的结构是下面这样的
```
src
├── cats
│    ├──dto
│    │   └──create-cat.dto.ts
│    ├── interfaces
│    │       └──cat.interface.ts
│    ├──cats.service.ts
│    └──cats.controller.ts
├──app.module.ts
└──main.ts
```

每日新闻 Daily news
也就是在一个 功能的 class 下，去声明这个 class 的相关 dto interface serveice controller 等等
## Nest 踩坑
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

### web 安全
增加 Authorization ，每次请求都需要校验、请求一次更新一个 token，使用动态 token。

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
## 项目计划
[项目需求](./ProjectRequirements.md)

补充前端和后端的需求

## 数据库
这里数据库选择是 MongoDB ，[MongoDB 对比 mysql](https://cloud.tencent.com/developer/article/1055372)；
### mongod 安装
在官网下载，并按照官网的指示进行安装。
### 数据位置
在 D 盘中新建 mongodb 文件夹，里面新建两个目录 data log 结构如下图

```
mongodb
├── data
│    ├── xxx.db 数据集的存放位置
├── logs
│    ├── mongodb.log 日志的存放位置
├──mongodb.conf 配置文件
```

mongodb.conf 内容
```conf
logpath=D:\GITHUB\mongodb\logs\mongodb.log
logappend=true
dbpath=D:\GITHUB\mongodb\data
directoryperdb=true
```
然后在打开 cmd 打开 MongoDB 安装目录。这是我的安装目录 C:\Program Files\MongoDB\Server\5.0\bin

执行：`mongod --config "C:\Program Files\MongoDB\Server\5.0\bin\mongo.conf" --install --serviceName "MongoDB"`

C:\Program Files\MongoDB\Server\5.0 这是我的 MongoDB 安装位置。

 mongod --config "D:\GITHUB\mongodb\mongodb.conf" --install --serviceName "MongoDB"

### 启动
配置好开机自启动以后，每次开机就会自己启动了。后面就不用管了。检查是不是启动了在 windows 上使用 `http://localhost:27017/` 看是不是 `It looks like you are trying to access MongoDB over HTTP on the native driver port.`。

### 连接 MongoDB
```
cnpm install --save @nestjs/mongoose mongoose
cnpm install --save-dev @types/mongoose
```

### mongo 链接
在完成上面的操作以后，可以在任意的位置执行 `mongo` ，这样就进入了 mongo 的数据库中，返回的结果如下图 ![启动 MongoDB](./img/mongo_start.png)

这时候就需要，使用 node 去链接已经启动的数据库。
目前的需求如下：

* 连接数据库
* 创建用户
* 管理用户
* 创建数据库，官方默认的是 test。输入 db 会返回 test
* 安全
* 创建 document
* 数据的增删改查

 ## 文章结构

每日的新闻结构是这样的：

* xxx 和 xxx
* xxx
* 【xxx 标题】
* 国内快讯
* 国际 xxx
* 国际 xxx

在提取数据的时候，需要注意的是带有 【】 中括弧的数据，这说明是一个新的栏目的开始和上一个栏目的结束。

目前的情况是数据已经准备好，但是并不是最全面的，很多数据需要手工去输入，也就是观看了以后要手动去输入一些出现的人名字，还有公司的名字。
需要做成一个 web 系统，前端进行输入，更新数据库
输入的时候用的分级是这样的

```
2020-11-22
├── '【“十三五”成就巡礼】“互联网+”激活经济高质量发展新引擎'  一级标题
│    ├──'这两天，浙江桐乡的这家纺丝车间里来了一位新成员，就是这个5G质检机器人。xxxx'  二级标题
│    │   └── '新凤鸣首席信息官' --- 这部分就是需要手动进行补充的，目前查了很多的联播稿件，就是没查到这个。  三级标题和详细内容 这部分是最重要的
```
目前的数据就是拿不到最重要的第三级的数据，需要人工去干预，不知道使用神经网络会不会更好，使用神经网络的时候，看能不能把相关的数据拿出来。

## 深度学习
### 单一场景
我只需要考虑比较单一的联播场景，也就是下面的文字字幕就可以。提取出字幕的数据，然后规整到标题下面，而文字稿的标题已经是处理好的，可以用 日期作为 key 将二者进行关联。
但是目前能力确实不足，其他的还能想想办法硬干，但是这玩意确实不行，需要做半自动化手段。

最好的手段就是全场景使用深度学习去处理，识别视频中出现的人，事件还有信息。
## 半自动化
所谓的半自动化，就是我先用自动化的手段将每日的标题摘取好，然后把数据进数据库，在数据库中使用年，月，日，这样的组合作为一张表的结合体。也就是说数据库中的表是以 年-月-日 这种格式进行管理的，然后再往每一张表中加入详细的每日数据，这时候结构就是
```
{
  title: '2020-11-22' 日期，字符串格式,
  newsVidioTimes:35min 或者 456000 单位 s,
  contentLength: 23  content 数组的长度,
  content: [
    {
      subTitle: '副标题',
      times:223444555  标题内容出现的时间，这个时间也是上一个标题的结束时间,
      message: ['xxx','yyy'] 内容，视情况进行补充，是以抓取的文本为基底,
      personNames: ['xxx','yyy'] 已经出现的人名称,
      companyNames:['xxx'] 出现的公司名称，这个是需要重点去做的，后续的分析很大程度上就是依赖这个,
      citys:['xx'] 城市，地区等等,
    }
  ]
}
```
我们的数据集合 collection 需要用年去做校对，这样的话，我们就会有五六张 collection，其中每张 collection 表有 365 条 document 文档。每一个文档的结构就应该是上面的这个形式。
### 视频人物
在视频中的人物也是很重要的，相关的人的名字，还有人出现的背景，时长等等。

### 出现的地名
在新闻中出现的地区，地名。以及介绍该地区的原因，是经济或者是环保或者是其他

### 公司的名字
出现的公司名称，为何出现的，是不是有政策进行关联。每个都需要有出现的具体时间，精确到分钟和秒，

### 政务
出现的GWY的政务，还有renDa的法规等等
