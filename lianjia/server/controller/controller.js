const xian = require('../service/xian');
const city = require('../service/city');
const chengdu = require('../service/chengdu');
const service = require('../service/index');
const model = {
    '/api/testapi': async ctx => {
        ctx.body = res;
    },

    /**
     * 获取数据库中存入的省份二手房数据二手房数据
     */
    '/api/city': async ctx => {
        let data = await service.cityAll();
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

    /**
     * 获取数据库中存入的省份二手房数据二手房数据
     */
    '/api/city/sort': async ctx => {
        let data = await service.cityAll();
        if (data.length > 0) {
            let sortNumber = (property) => {
                return function (a, b) {
                    var value1 = a[property];
                    var value2 = b[property];
                    return value2 - value1;
                };
            };
            ctx.body = {
                code: 0, data: data.sort(sortNumber('total'))
            }
        } else {
            ctx.body = {
                code: 1, data: 'get data from city is failed'
            }
        }
    },
};
module.exports = model;