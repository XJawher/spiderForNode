const xian = require('../service/xian');
const chengdu = require('../service/chengdu');
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
    '/api/createNews': async ctx => {
        ctx.body = await service.addNews(ctx.param, 'lipc', '192.168.100.1');
    },
};
module.exports = model;