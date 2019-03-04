const xian = require('../service/xian');
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
        ctx.body = { code: 1, message: '' }
    },
    '/api/getchengdu': async ctx => {
        await chengdu.lianjia();
        ctx.body = { code: 1, message: ' start the chengdu er shou fang ' }
    },
};
module.exports = model;