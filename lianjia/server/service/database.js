const news = require('../model/news');
const xian = require('../model/xian');
const chengdu = require('../model/chengdu');
const dao = require('../module/dao');

const model = {
    async addNews(param) {
        return await dao.createOne(news, param);
    },

    async xianLianjia(param) {
        return await dao.createOne(xian, param);
    },

    async chengduLianjia(param) {
        return await dao.createOne(chengdu, param);
    },
}

module.exports = model;