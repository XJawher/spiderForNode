
const cheerio = require('cheerio');
const database = require('./database');
const model = {

    async test(res) {
        let hotNews = [];
        // 访问成功，请求http://news.baidu.com/页面所返回的数据会包含在res.text中。

        /* 使用cheerio模块的cherrio.load()方法，将HTMLdocument作为参数传入函数
           以后就可以使用类似jQuery的$(selectior)的方式来获取页面元素
         */
        let $ = await cheerio.load(res.text);
        // 找到目标数据所在的页面元素，获取数据
        $('div#pane-news ul li a').each((idx, ele) => {

            // cherrio中$('selector').each()用来遍历所有匹配到的DOM元素
            // 参数idx是当前遍历的元素的索引，ele就是当前便利的DOM元素
            let news = {
                title: $(ele).text(),        // 获取新闻标题
                href: $(ele).attr('href')    // 获取新闻网页链接
            };
            hotNews.push(news)              // 存入最终结果数组
        });
        await database.addNews(hotNews)
        return hotNews
    },

    async addNews(param, user, ip) {
        let result = {};
        try {
            await database.addNews(param)
            result = { code: 0, message: 'insert news  successfully', user: user, ip: ip };
        } catch (error) {
            result = { code: 1, message: 'insert news failed', user: user, ip: ip };
        }
        return result;
    },
};
module.exports = model;