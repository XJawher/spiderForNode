const express = require('express');
const app = express();
const superagent = require('superagent');
const hotNews = require('./getHotNews')
// ...

let server = app.listen(3000, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log('Your App is running at http://%s:%s', host, port);
});

let news = [];
superagent.get('http://news.baidu.com/').end(async (err, res) => {
    if (err) {
        // 如果访问失败或者出错，会这行这里
        console.log(`热点新闻抓取失败 - ${err}`)
    } else {
        // 访问成功，请求http://news.baidu.com/页面所返回的数据会包含在res
        // 抓取热点新闻数据
        news = await hotNews.getHotNews(res)
    }
});

app.use((req, res, next) => {
    console.log('%s %s', req.method, req.url);
    next();
})

app.use('/news', async (req, res, next) => {
    res.send(news);
})

app.get('/', function (req, res) {
    res.send('hotNews');
});
