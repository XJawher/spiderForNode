const lianjia = require('../service/lianjia')
const model = {
    '/api/testapi': async ctx => {
        ctx.body = res;
    },
    '/api/lianjia': async ctx => {
        await lianjia.lianjia();
        ctx.body = { code: 1, message: ' start the xian er shou fang shuju ' }
    },
    '/api/createNews': async ctx => {
        ctx.body = await service.addNews(ctx.param, 'lipc', '192.168.100.1');
    },
};
module.exports = model;