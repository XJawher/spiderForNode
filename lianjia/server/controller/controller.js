const xian = require('../service/xian');
const city = require('../service/city');
const chengdu = require('../service/chengdu');
const service = require('../service/index');
const model = {
    '/api/testapi': async ctx => {
        ctx.body = res;
    },
    '/api/lianjia/xian': async ctx => {
        await xian.lianjia();
        ctx.body = { code: 1, message: ' start the xian er shou fang shuju ' }
    },
    '/api/lianjia/chengdu': async ctx => {
        await chengdu.lianjia();
        ctx.body = { code: 1, message: ' start the chengdu er shou fang ' }
    },
    '/api/getxian': async ctx => {
        let data = await service.xian();
        if (data) {
            ctx.body = {
                code: 0,
                data: {
                    total: data.length
                }
            }
        } else {
            ctx.body = { code: 1, data: 'get xian data failed' }
        }
    },
    '/api/getchengdu': async ctx => {
        await chengdu.lianjia();
        ctx.body = { code: 1, message: ' start the chengdu er shou fang ' }
    },
    '/api/lianjia/city': async ctx => {
        let res = await city.lianjia();
        ctx.body = { code: 1, message: ' start the data for total city', res: res }
    },
    '/api/city': async ctx => {
        let data = await service.city();
        if (data.length > 0) {
            ctx.body = {
                code: 0, data: data
            }
        } else {
            ctx.body = {
                code: 1, data: 'get data from city is failed'
            }
        }
    },
};
module.exports = model;