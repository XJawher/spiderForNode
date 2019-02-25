const superagent = require('superagent');
const database = require('./database');
const service = require('../service');

const model = {
    async baiduHot() {
        let news = [];
        await superagent.get('http://news.baidu.com/').end(async (err, res) => {
            if (err) {
                // 如果访问失败或者出错，会这行这里
                console.log(`热点新闻抓取失败 - ${err}`)
            } else {
                // 访问成功，请求http://news.baidu.com/页面所返回的数据会包含在res
                // 抓取热点新闻数据
                try {
                    news = await service.test(res)
                    await database.addNews({ title: 'test', href: 'this is a test url' })
                } catch (error) {
                    console.log({ code: 1, message: error });
                }
            }
        });
        return news;
    }
}

module.exports = model;