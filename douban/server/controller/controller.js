const service = require('../service');
const requestMessa = require('../service/requestMessa')
const model = {
    '/api/testapi': async ctx => {
        await requestMessa.baiduHot()
        ctx.body = { code: 1, message: 'request for baidu hot news' };
    },
    '/api/createNews': async ctx => {
        ctx.body = await service.addNews(ctx.param, 'lipc', '192.168.100.1');
    },
};
module.exports = model;