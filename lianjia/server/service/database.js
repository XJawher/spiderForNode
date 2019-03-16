const news = require('../model/news');
const xian = require('../model/xian');
const city = require('../model/city');
const xianData = require('../model/xianData');
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

    async chengduAll(param) {
        return await dao.findAll(chengdu, param);
    },

    async xianAll(param) {
        return await dao.findAll(xianData, param);
    },

    async city(param) {
        return await dao.createOne(city, param);
    },
}

module.exports = model;