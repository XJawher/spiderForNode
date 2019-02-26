const news = require('../model/news');
const dao = require('../module/dao');

const model = {
    async addNews(param) {
        return await dao.createOne(news, param);
    }
}

module.exports = model;