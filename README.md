# node 应用爬虫部分

## 项目结构

### 后端的主要结构

后端主要由 node + koa + MongoDB 组成,先用 node 爬下数据,然后再存到 MongoDB 中,后续再从数据集中获取然后再传给前端,再用前端进行展示.

#### 函数及其作用

* [x] `/api/lianjia/xian` 获取西安的所有二手房数据,包括页面中的 3000 条数据
* [x] `/api/lianjia/chengdu` 获取成都的二手房数据,包括页面中的 3000 条数据
* [x] `/api/lianjia/city` 获取以省份为单位的二手房总数据,这里的数据结构是这样的 `{ *province: '四川', cityEN: 'cd', cityCH: '成都',total:'23445', time:'Date'}`, 这样的数据结构只是为了做每日的图表用,基本上就是以日线和周线为主,月线到时候再看下吧,暂时不做为主要的进攻方向,基本上这里的展示角度会以每日的增长量,人口的数据维度下的比对,经济的数据维度下的比对,以及房的数据下的比对.
* [x] `/api/getxian` 获取已经存好的西安二手房数据
* [x] `/api/getchengdu` 获取已经存好的成都二手房数据
* [x] `/api/city` 获取已经存好的所有二手房数据,返回给前端做数据的展示用

### 将全国所有的省会城市的二手房 3000 条数据全部拉下来

* [x] 安徽 合肥hf
* [ ] 北京 北京bj
* [ ] 重庆 重庆cq
* [ ] 福建 福州fz
* [ ] 广东 广州 gz深圳sz 珠海zh
* [ ] 贵州 贵阳gy
* [ ] 广西 南宁nn
* [ ] 甘肃 兰州lz
* [ ] 湖北 武汉wh
* [ ] 湖南 长沙cs
* [ ] 河北 石家庄sjz
* [ ] 海南 海口hk
* [ ] 河南 郑州 zz
* [ ] 黑龙江 哈尔滨hrb
* [ ] 江苏 南京nj
* [ ] 吉林 长春cc
* [ ] 江西 南昌nc
* [ ] 辽宁 沈阳sy
* [ ] 内蒙古 呼和浩特hhht
* [ ] 宁夏 银川yinchuan
* [ ] 上海 上海sh
* [ ] 四川 成都cd
* [ ] 山东 济南jn
* [ ] 陕西 西安xa
* [ ] 山西 太原ty
* [ ] 天津 天津tj
* [ ] 云南 昆明km
* [ ] 浙江  杭州hz

#### 定时任务

这里的定时任务就用Node Schedule 来做,

    *    *    *    *    *    *
    ┬    ┬    ┬    ┬    ┬    ┬
    │    │    │    │    │    │
    │    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
    │    │    │    │    └───── month (1 - 12)
    │    │    │    └────────── day of month (1 - 31)
    │    │    └─────────────── hour (0 - 23)
    │    └──────────────────── minute (0 - 59)
    └───────────────────────── second (0 - 59, OPTIONAL)

Node Schedule 及其强大的一点就是这个,可以通过 * 号位置的不同来设置不同等级的时间维度参数,这是非常强大的一点,我很喜欢,简单直白以及强大.这是官方的链接 [https://github.com/node-schedule/node-schedule](https://github.com/node-schedule/node-schedule)

### 前端主要结构

目前的想法是前端主要用 react 来实现,表格的部分用 antd 来做,基本上就是目前的这一套,只不过想用 TS 来实现前端的代码,这样的话用 ts 来练练手.至于数据的管理目前的想法是暂时不用 redux ,redux 太重了,暂时用自带的 hooks 来试试

* [x] 前端框架 react + antd
* [ ] 数据管理使用 redux
* [ ] 主要玩一下 hooks
* [ ] TS 能玩一下最好不过了
* [ ] 数据的可视化使用自己封装的 echart 来做

#### app.js

     <HashRouter>
        <Switch>
            <Route path={routerPath.Main} component={Main} />

            <Redirect from={routerPath.Root} to={this.state.defaultPath} />
        </Switch>
    </HashRouter>

前端的 App.js 结构基本如下,首先使用 HashRouter 来做路由的分发,前端将路由控制在自己的手里.然后接下来一层就是语言层,当然需要的话就做,我感觉这里是不需要的,因此我这里没有多做这一层.用 Switch 来做路由的切换,路由在切换的时候分为基础路由和组件路由,这里的基础路由为空,因为这里是用不到基础路由的,都是写到组件路由中去.数据的管理暂时不用 redux ,先用自己的数据控制来做

#### routerPath

路由的文件位置,这里的路由是要给后续的左边栏点击的时候高亮做准备的地方,分为 index 和 pathToMenu 两部分,index 是基础的路由,而 pathToMenu 是后期在侧边栏的时候导航高亮等需要的东西基础的结构如下:

    const index = {
        Root: '/',

        Main: '/main',

        Dashboard: '/dashboard',
    };

    export default index;

    export const pathToMenu = {
        Dashboard: [index.Dashboard],
    };

#### 数据的展示

在这里数据的展示基本上就是以省为主,以城市的相互比对,经济的比对,以及房产的数据比对为主

* [x] 每日的全国增加量(列出详细的有统计的省份的数据,比如陕西增加多少,省会的占比是多少,**这里先暂时只做省会城市的,或者只做前20位的,具体看界面的展示情况,可以的话尽量的多放数据**)
* [ ] 每日的增长冠军
* [ ] 每日的全国排行
* [ ] 每日的全国增长排行
* [ ] 每个城市的日增长率
* [ ] 每个城市的周增量以及周增长率
* [ ] 在相同的平均房价下房产对比
* [ ] 在相同的平均房价下的增量以及数量对比
* [ ] 在平均工资下的数据对比
* [ ] 在财政收入下的房产数据对比
* [ ] 主要的市区面积下的对比
* [ ] 城市 GDP 下的对比
* [ ] 将主要的省会城市的二手房所有的房间除以面积得到平均的房价

#### 前端的请求库 fetch

首先是需要明白的地方就是 fetch 是不能直接被使用,要做个封装才可以,做成两个封装,一个是 post 和 get ,后续了看要不要加上 delete ,其实我个人是很不喜欢 delete ,这和用的不是很多有关系????具体的原因么可能和舒适区有关系,不喜欢用自己没怎么用的东西,今天把 fetch 先给做好,其余的先不说.
这里的 fetch.js 会导出两个对象,一个是 POST 一个是 GET,通过这两个对象进行后端数据的查询和传输.对 JS 的导出有点生疏了,这里再复习一下.具体的 fetch 的详细使用指南可以看下下面的这篇文章 [fetch使用指南](https://segmentfault.com/a/1190000007019545),这里采用的是第三种解决方案也是我司目前采用的解决方案,使用 Promise 来做.
这里的 fetch 结构是这样的

    import { stringify } from 'querystring';

    let httpServer = (url, options) => {
        return new Promise(async (resolve, reject) => {
            options.credentials = 'same-origin';
            options.headers = { 'Content-Type': 'application/json; charset=utf-8' };
            try {
                let response = await fetch(url, options);
                if (response.ok) {
                    let { code, data, message } = await response.json();
                    if (code === 0) {
                        resolve({ code, data });
                    } else {
                        resolve({ code, message });
                    }
                } else {
                    reject({ msg: response.statusText });
                }
            } catch (error) {
                reject(error);
            }
        });
    };

    let initSearchUrl = (url, param) => (param ? url + '?' + stringify(param) : url);

    export let fetchGet = (url, param) => (httpServer(initSearchUrl(url, param), { method: 'GET' }));

    export let fetchPost = (url, param) => (httpServer(url, { method: 'POST', body: JSON.stringify(param) }));

    export let fetchMock = (data) => new Promise(resolve => setTimeout(() => resolve(data || true), 500));

基本上就是一个很简单的 fetch 的结构,这里只做了 post 和 get,至于说 delete 之类的暂时用不到就没再做了.fetchMock 是为了之后的 UT 所做的准备,看后续的时间吧,有时间了就继续做

### 获取指定城市的数据

#### 数据的传输

明明在前端传递的数据是 POST 但是后端在获取的时候却得到的是 GET,不知道这是啥原因,

    {
        request: {
            method: "GET",
            url: "/api/city/condition",
            header: {
                host: "localhost:3456",
                connection: "keep-alive",
                cache-control: "max-age=0",
                upgrade-insecure-requests: "1",
                user-agent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36",
                accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
                accept-encoding: "gzip, deflate, br",
                accept-language: "zh-CN,zh;q=0.9,en;q=0.8",
            }
        },
        response: {
            status: 200,
            message: "OK",
            header: {
                content-type: "application/json; charset=utf-8"
            }
        },
        app: {
            subdomainOffset: 2,
            proxy: false,
            env: "development"
        },
        originalUrl: "/api/city/condition",
        req: "<original node req>",
        res: "<original node res>",
        socket: "<original node socket>"
    }

具体的请求返回数据如上,原因暂时未知

错误的原因有可能是我没有对前端传递的 HTTP 请求做二次封装,做了二次封装以后才能和正常的一样进行数据的获取.现在需要做一次新的数据封装,在路由之前在 index.js 中进行请求的拦截,然后把请求做一次封装,对于 POST 和 GET 请求要分开做封装.

错误原因:是没有做中间件的封装,做完中间件的封装以后,就可以用基础的 parma 来做数据的获取.

    const modal = {
        initRequest() {
            return async (ctx, next) => {
                ctx.parma = ctx.request.method.toLowerCase() === 'post' ? ctx.request.body : ctx.query;
                await next();
            };
        }
    };

    export default modal;
在中间件中我们可以做很多的事情,比如检测用户的状态,检测指定的一个请求等等,可以对指定的需求进行完美的开发

现在有个问题,就是在后端的 index.js 中

    const Koa = require('koa');
    const app = new Koa();
    const router = require('./router/router');
    const middleware = require('./middleware/middleware');
    const bodyParser = require('koa-bodyparser');
    require('./schedule/index');
    app.use(bodyParser());
    app.use(middleware.initRequest());
    app.use(router.routes());
    app.use(router.allowedMethods());
    app.listen(3456);
    console.log('server is running on 3456');

app.use() 他的执行顺序是怎么设定的,将 **app.use(middleware.initRequest());** 移动到路由的下部分的时候就会出现中间件的不起作用现象,说明该执行的顺序是按照 promise 链式调用进行执行的,如果将其移动到 **app.use(bodyParser());** 之前的话中间件的执行也是不起作用的,因为在数据 JSON 化之前就去取值的话是取不到这个值的,再次说明了 koa 的执行是链式的,是按照 promise 的要求进行的

#### 需求每日的全国增加量

数据的处理暂时交给前端来处理,还是选择输入进行获取数据,日期选择用 antd .这里先把所有的数据都返回发给前端,这里获取全部的数据,然后进行排序,如果出现没有的数据那就暂时留空,因为有好久是数据不存在的先置空

























