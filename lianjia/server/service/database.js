const news = require('../model/news');
const xian = require('../model/xian');
const city = require('../model/city');
const xianData = require('../model/xianData');
const chengduData = require('../model/chengduData');
const chengdu = require('../model/chengdu');
const dao = require('../module/dao');

const model = {
    async addNews(param) {
        return await dao.createOne(news, param);
    },

    async xianLianjia(param) {
        return await dao.createOne(xian, param);
    },

    async xianData(param) {
        return await dao.createOne(xianData, param);
    },

    async chengduData(param) {
        return await dao.createOne(chengduData, param);
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

    async cityAll(param) {
        return await dao.findAll(city, param);
    },

}

module.exports = model;