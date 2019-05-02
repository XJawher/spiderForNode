const xian = require('../service/xian');
const database = require('../service/database');
// const chengdu = require('../service/chengdu');
const service = require('../service/index');
const updateTime = require('../service/updateTime');
const model = {
    '/api/testapi': async ctx => {
        ctx.body = ctx;
    },

    /**
     * 获取数据库中存入的省份二手房数据二手房数据
     */
    '/api/city': async ctx => {
        let data = await service.cityAll();
        if (data.length > 0) {
            ctx.body = {
                code: 0, data: data
            };
        } else {
            ctx.body = {
                code: 1, data: 'get data from city is failed'
            };
        }
    },

    /**
     * 获取数据库中存入的省份二手房数据二手房数据
     */
    '/api/city/sort': async ctx => {
        let data = await service.cityAll();
        if (data.length > 0) {
            let sortNumber = (property) => (a, b) => b[property] - a[property];
            ctx.body = {
                code: 0, data: data.sort(sortNumber('total'))
            };
        } else {
            ctx.body = {
                code: 1, data: 'get data from city is failed'
            };
        }
    },

    /**
     * 获取数据库中存入的省份二手房数据二手房数据
     */
    '/api/city/bj': async ctx => {
        xian.bj();
        ctx.body = {
            code: 1, data: 'start bj'
        };
    },

    /**
     * 获取数据库中存入的省份二手房数据二手房数据
     */
    '/api/city/xian': async ctx => {
        xian.lianjia();
        ctx.body = {
            code: 1, data: 'start bj'
        };
    },

    /**
     * 当一次性插入过多的数据的时候,就会报错,这也许和我的电脑有关系
     * <--- Last few GCs --->
        [35126:0x104800000]   552817 ms: Mark-sweep 1376.9 (1446.6) -> 1365.3 (1448.6) MB, 884.1 / 0.0 ms  (average mu = 0.113, current mu = 0.026) allocation failure scavenge might not succeed
        [35126:0x104800000]   553722 ms: Mark-sweep 1378.9 (1448.6) -> 1367.3 (1451.1) MB, 881.1 / 0.0 ms  (average mu = 0.071, current mu = 0.026) allocation failure scavenge might not succeed
        <--- JS stacktrace --->
        ==== JS stack trace =========================================
            0: ExitFrame [pc: 0x3b30327dbe3d]
        Security context: 0x1d461609e6e1 <JSObject>
            1:  [0x1d467dae8411] [/Users/lipc/Desktop/work/spiderForNode/lianjia/node_modules/mongoose/lib/schema.js:~513] [pc=0x3b3032c3236e](this=0x1d46511e2ca9 <Schema map = 0x1d467f8da5c9>,path=0x1d46c4468509 <String[5]: flood>,obj=0x1d462dd026f1 <undefined>)
            2: arguments adaptor frame: 1->2
            3: _getPathsToValidate(aka _getPathsToValidate) ...

        FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory
        1: 0x10003ae75 node::Abort() [/Users/lipc/.nvm/versions/node/v10.13.0/bin/node]
        2: 0x10003b07f node::OnFatalError(char const*, char const*) [/Users/lipc/.nvm/versions/node/v10.13.0/bin/node]
        3: 0x1001a7ae5 v8::internal::V8::FatalProcessOutOfMemory(v8::internal::Isolate*, char const*, bool) [/Users/lipc/.nvm/versions/node/v10.13.0/bin/node]
        4: 0x100572ef2 v8::internal::Heap::FatalProcessOutOfMemory(char const*) [/Users/lipc/.nvm/versions/node/v10.13.0/bin/node]
        5: 0x1005759c5 v8::internal::Heap::CheckIneffectiveMarkCompact(unsigned long, double) [/Users/lipc/.nvm/versions/node/v10.13.0/bin/node]
        6: 0x10057186f v8::internal::Heap::PerformGarbageCollection(v8::internal::GarbageCollector, v8::GCCallbackFlags) [/Users/lipc/.nvm/versions/node/v10.13.0/bin/node]
        7: 0x10056fa44 v8::internal::Heap::CollectGarbage(v8::internal::AllocationSpace, v8::internal::GarbageCollectionReason, v8::GCCallbackFlags) [/Users/lipc/.nvm/versions/node/v10.13.0/bin/node]
        8: 0x10057c2dc v8::internal::Heap::AllocateRawWithLigthRetry(int, v8::internal::AllocationSpace, v8::internal::AllocationAlignment) [/Users/lipc/.nvm/versions/node/v10.13.0/bin/node]
        9: 0x10057c35f v8::internal::Heap::AllocateRawWithRetryOrFail(int, v8::internal::AllocationSpace, v8::internal::AllocationAlignment) [/Users/lipc/.nvm/versions/node/v10.13.0/bin/node]
        10: 0x10054bca4 v8::internal::Factory::NewFillerObject(int, bool, v8::internal::AllocationSpace) [/Users/lipc/.nvm/versions/node/v10.13.0/bin/node]
        11: 0x1007d3b54 v8::internal::Runtime_AllocateInNewSpace(int, v8::internal::Object**, v8::internal::Isolate*) [/Users/lipc/.nvm/versions/node/v10.13.0/bin/node]
        12: 0x3b30327dbe3d
        [1]    35126 abort      node index.js
     */
    '/api/city/xian/insert': async ctx => {
        // 注释不要删除
        // let data = await service.xian();
        // data.forEach(item => {
        //     let datasSring = JSON.stringify(item.time).split('T')[0].replace('"', '');
        //     database.xianLianjia([{
        //         'title': item.title, 'address': item.address, 'addressSupplement': item.addressSupplement, 'datasSring': `${datasSring}`,
        //         'flood': item.flood, 'floodSupplement': item.floodSupplement, 'followInfo': item.followInfo,
        //         'tag': item.tag, price: item.price, priceSign: item.priceSign, total: item.total, time: item.time
        //     }]);
        // });
        ctx.body = {
            code: 1, data: ''
        };
    },

    /**
     * 获取数据库中存入的省份二手房数据二手房数据
     */
    '/api/city/xianNewTotal': async ctx => {
        let data = await service.xianNewTotal();
        ctx.body = {
            code: 0, data: data
        };
    },

    /**
     * 获取数据库中存入的指定城市数据
     * @param {name 城市的名字}
     * @param {time 指定日期的城市名字,如果为空则是该城市的全部数据}
     */
    '/api/city/condition': async ctx => {
        console.log(ctx.parma);
        let { name, time } = ctx.parma;
        let data = await service.xianNewTotal({ address: name, datasSring: time });
        ctx.body = {
            code: 0, data: data
        };
    },
    /**
     * 获取数据库中存入的指定城市数据
     * @param {name 城市的名字}
     * @param {time 指定日期的城市名字,如果为空则是该城市的全部数据}
     */
    '/api/city/get': async ctx => {
        console.log(ctx.parma);
        ctx.body = {
            code: 0, data: ctx.parma
        };
    },
    /**
     * 获取数据库中存入的指定城市数据
     * 这里的数据是全国的数据,那么就暂时不需要传参数了,先暂时获取全部的日期数据
     * @param {name 城市的名字}
     * @param {time 指定日期的城市名字,日期必须要有,不能为空,日期接收 unit 然后再自己转换}
     * 这里只获取指定的城市的数据,将数据进行过滤
     */
    '/api/city/rankings': async ctx => {
        let cityTotal = [
            // { province: '安徽', cityEN: 'aq', cityCH: '安庆' },
            // { province: '安徽', cityEN: 'hf', cityCH: '合肥' },
            //  { province: '安徽', cityEN: 'mas', cityCH: '马鞍山' },
            //  { province: '安徽', cityEN: 'wuhu', cityCH: '芜湖' },
            // { province: '北京', cityEN: 'bj', cityCH: '北京' },
            { province: '重庆', cityEN: 'cq', cityCH: '重庆' },
            // { province: '福建', cityEN: 'fz', cityCH: '福州' },
            // { province: '福建', cityEN: 'quanzhou', cityCH: '泉州' },
            // { province: '福建', cityEN: 'xm', cityCH: '厦门' },
            // { province: '广东', cityEN: 'dg', cityCH: '东莞' },
            // { province: '广东', cityEN: 'fs', cityCH: '佛山' },
            { province: '广东', cityEN: 'gz', cityCH: '广州' },
            //   { province: '广东', cityEN: 'hui', cityCH: '惠州' },
            //   { province: '广东', cityEN: 'jiangmen', cityCH: '江门' },
            //   { province: '广东', cityEN: 'qy', cityCH: '清远' },
            { province: '广东', cityEN: 'sz', cityCH: '深圳' },
            // { province: '广东', cityEN: 'zh', cityCH: '珠海' },
            //   { province: '广东', cityEN: 'zhanjiang', cityCH: '湛江' },
            //   { province: '广东', cityEN: 'zs', cityCH: '中山' },
            // { province: '贵州', cityEN: 'gy', cityCH: '贵阳' },
            // { province: '广西', cityEN: 'bh', cityCH: '北海' },
            //  { province: '广西', cityEN: 'gl', cityCH: '桂林' },
            //  { province: '广西', cityEN: 'liuzhou', cityCH: '柳州' },
            // { province: '广西', cityEN: 'nn', cityCH: '南宁' },
            // { province: '甘肃', cityEN: 'lz', cityCH: '兰州' },
            // { province: '湖北', cityEN: 'huangshi', cityCH: '黄石' },
            // { province: '湖北', cityEN: 'hg', cityCH: '黄冈' },
            { province: '湖北', cityEN: 'wh', cityCH: '武汉' },
            // { province: '湖北', cityEN: 'xy', cityCH: '襄阳' },
            // { province: '湖北', cityEN: 'xn', cityCH: '咸宁' },
            // { province: '湖北', cityEN: 'yichang', cityCH: '宜昌' },
            // { province: '湖南', cityEN: 'cs', cityCH: '长沙' },
            // { province: '湖南', cityEN: 'changde', cityCH: '常德' },
            // { province: '湖南', cityEN: 'yy', cityCH: '岳阳' },
            // { province: '湖南', cityEN: 'zhuzhou', cityCH: '株洲' },
            // { province: '河北', cityEN: 'bd', cityCH: '保定' },
            // { province: '河北', cityEN: 'chengde', cityCH: '承德' },
            // { province: '河北', cityEN: 'hd', cityCH: '邯郸' },
            // { province: '河北', cityEN: 'hs', cityCH: '衡水' },
            // { province: '河北', cityEN: 'lf', cityCH: '廊坊' },
            // { province: '河北', cityEN: 'qhd', cityCH: '秦皇岛' },
            // { province: '河北', cityEN: 'sjz', cityCH: '石家庄' },
            // { province: '河北', cityEN: 'ts', cityCH: '唐山' },
            // { province: '河北', cityEN: 'xt', cityCH: '邢台' },
            // { province: '河北', cityEN: 'zjk', cityCH: '张家口' },
            // { province: '海南', cityEN: 'bt', cityCH: '保亭' },
            // { province: '海南', cityEN: 'cm', cityCH: '澄迈' },
            // { province: '海南', cityEN: 'hk', cityCH: '海口' },
            // { province: '海南', cityEN: 'lg', cityCH: '临高' },
            // { province: '海南', cityEN: 'ld', cityCH: '乐东' },
            // { province: '海南', cityEN: 'ls', cityCH: '陵水' },
            // { province: '海南', cityEN: 'qh', cityCH: '琼海' },
            // { province: '海南', cityEN: 'dz', cityCH: '儋州' },
            // { province: '海南', cityEN: 'da', cityCH: '定安' },
            // { province: '海南', cityEN: 'qz', cityCH: '琼中' },
            // { province: '海南', cityEN: 'san', cityCH: '三亚' },
            // { province: '海南', cityEN: 'wzs', cityCH: '五指山' },
            // { province: '海南', cityEN: 'wc', cityCH: '文昌' },
            // { province: '海南', cityEN: 'wn', cityCH: '万宁' },
            // { province: '河南', cityEN: 'kf', cityCH: '开封' },
            // { province: '河南', cityEN: 'luoyang', cityCH: '洛阳' },
            // { province: '河南', cityEN: 'xinxiang', cityCH: '新乡' },
            // { province: '河南', cityEN: 'xc', cityCH: '许昌' },
            { province: '河南', cityEN: 'zz', cityCH: '郑州' },
            // { province: '黑龙江', cityEN: 'hrb', cityCH: '哈尔滨' },
            // { province: '江苏', cityEN: 'changzhou', cityCH: '常州' },
            // { province: '江苏', cityEN: 'ha', cityCH: '淮安' },
            // { province: '江苏', cityEN: 'nj', cityCH: '南京' },
            // { province: '江苏', cityEN: 'nt', cityCH: '南通' },
            // { province: '江苏', cityEN: 'su', cityCH: '苏州' },
            // { province: '江苏', cityEN: 'wx', cityCH: '无锡' },
            // { province: '江苏', cityEN: 'zj', cityCH: '镇江' },
            // { province: '江苏', cityEN: 'xz', cityCH: '徐州' },
            // { province: '江苏', cityEN: 'yc', cityCH: '盐城' },
            // { province: '吉林', cityEN: 'jl', cityCH: '吉林' },
            // { province: '吉林', cityEN: 'cc', cityCH: '长春' },
            // { province: '江西', cityEN: 'ganzhou', cityCH: '赣州' },
            // { province: '江西', cityEN: 'jiujiang', cityCH: '九江' },
            // { province: '江西', cityEN: 'jian', cityCH: '吉安' },
            // { province: '江西', cityEN: 'sr', cityCH: '上饶' },
            // { province: '江西', cityEN: 'nc', cityCH: '南昌' },
            // { province: '辽宁', cityEN: 'dl', cityCH: '大连' },
            // { province: '辽宁', cityEN: 'dd', cityCH: '丹东' },
            // { province: '辽宁', cityEN: 'sy', cityCH: '沈阳' },
            // { province: '内蒙古', cityEN: 'hhht', cityCH: '呼和浩特' },
            // { province: '宁夏', cityEN: 'yinchuan', cityCH: '银川' },
            { province: '上海', cityEN: 'sh', cityCH: '上海' },
            { province: '四川', cityEN: 'cd', cityCH: '成都' },
            // { province: '四川', cityEN: 'dy', cityCH: '德阳' },
            // { province: '四川', cityEN: 'dazhou', cityCH: '达州' },
            //  { province: '四川', cityEN: 'leshan', cityCH: '乐山' },
            // { province: '四川', cityEN: 'liangshan', cityCH: '凉山' },
            // { province: '四川', cityEN: 'mianyang', cityCH: '绵阳' },
            // { province: '四川', cityEN: 'ms', cityCH: '眉山' },
            // { province: '四川', cityEN: 'nanchong', cityCH: '南充' },
            // { province: '山东', cityEN: 'jn', cityCH: '济南' },
            //  { province: '山东', cityEN: 'linyi', cityCH: '临沂' },
            // { province: '山东', cityEN: 'qd', cityCH: '青岛' },
            //   { province: '山东', cityEN: 'wf', cityCH: '潍坊' },
            //   { province: '山东', cityEN: 'weihai', cityCH: '威海' },
            //   { province: '山东', cityEN: 'yt', cityCH: '烟台' },
            //   { province: '山东', cityEN: 'zb', cityCH: '淄博' },
            // { province: '陕西', cityEN: 'xianyang', cityCH: '咸阳' },
            // { province: '陕西', cityEN: 'hanzhong', cityCH: '汉中' },
            // { province: '陕西', cityEN: 'baoji', cityCH: '宝鸡' },
            { province: '陕西', cityEN: 'xa', cityCH: '西安' },
            // { province: '山西', cityEN: 'jz', cityCH: '晋中' },
            // { province: '山西', cityEN: 'ty', cityCH: '太原' },
            { province: '天津', cityEN: 'tj', cityCH: '天津' },
            // { province: '云南', cityEN: 'dali', cityCH: '大理' },
            // { province: '云南', cityEN: 'km', cityCH: '昆明' },
            // { province: '云南', cityEN: 'xsbn', cityCH: '西双版纳' },
            // { province: '浙江', cityEN: 'hz', cityCH: '杭州' },
            // { province: '浙江', cityEN: 'huzhou', cityCH: '湖州' },
            // { province: '浙江', cityEN: 'jx', cityCH: '嘉兴' },
            // { province: '浙江', cityEN: 'jh', cityCH: '金华' },
            // { province: '浙江', cityEN: 'nb', cityCH: '宁波' },
            // { province: '浙江', cityEN: 'sx', cityCH: '绍兴' },
            // { province: '浙江', cityEN: 'taizhou', cityCH: '台州' },
            // { province: '浙江', cityEN: 'wz', cityCH: '温州' }
        ];
        cityTotal.forEach(item => {
            item.total = [];
            item.time = [];
            item.modify = [];
        });
        let data = await service.cityRankings();
        data.sort().forEach(item => {
            cityTotal.forEach(cityTotal => {
                if (cityTotal.cityEN === item.cityEN) {
                    cityTotal.total.push(item.total);
                    cityTotal.time.push(item.time);
                    cityTotal.modify.push({ total: item.total, time: JSON.stringify(item.time).split('T')[0].replace('"', '') });
                }
            });
        });
        ctx.body = {
            code: 0, data: cityTotal
        };
    },

    '/api/update/gettime': async ctx => {
        let { datasSring } = ctx.parma;
        let data = await updateTime.xianNewTotal({ datasSring: datasSring });
        ctx.body = { code: 0, data: data };
        console.log(new Date());
    },

    '/api/update/settime': async ctx => {
        let { data } = ctx.parma;
        let res = await updateTime.batchUpdate(data);
        ctx.body = { code: 0, data: res };
    },

    '/api/get/city': async ctx => {
        /**
         * @todo
         * @param city which city's data you wanted to get,city is database city
         * @param datasSring  you wanted to query the time of city
         *
         * findByCity
         */
        let { city, datasSring } = ctx.parma;
        let data = await database.findByCity(city, { datasSring: datasSring });
        ctx.body = { code: 0, data: data };
    },

};
module.exports = model;