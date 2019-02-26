const superagent = require('superagent');
const database = require('./database');
const cheerio = require('cheerio');

const model = {
    async lianjia() {
        // let $ = await cheerio.load(res.text);
        await superagent.get('https://xa.lianjia.com/ershoufang/pg100/').end(async (err, res) => {
            let $ = await cheerio.load(res.text);
            if (err) {
                console.log(`西安链家二手房数据抓取失败  ${err}`)
            } else {
                $('div#content div.leftContent ').each(element => {
                    console.log(element);
                });
            }
        });
    }
}

module.exports = model;