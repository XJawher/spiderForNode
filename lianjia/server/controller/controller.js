const xian = require('../service/xian');
// const city = require('../service/city');
// const chengdu = require('../service/chengdu');
const service = require('../service/index');
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
     * 获取数据库中存入的指定城市数据
     * @param {name 城市的名字}
     * @param {time 指定日期的城市名字,如果为空则是该城市的全部数据}
     */
    '/api/city/condition': async ctx => {
        console.log(ctx.parma);
        ctx.body = {
            code: 0, data: ctx.parma
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
};
module.exports = model;