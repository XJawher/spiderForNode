const news = require('../model/news');
const dao = require('../module/dao');

const model = {
    async addNews(param) {
        console.log('database for hot news,and the message is ');
        console.log(param);
        return await dao.createOne(news, param);
    }
}

module.exports = model;