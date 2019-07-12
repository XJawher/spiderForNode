const superagent = require('superagent');
const database = require('../service/database');
const cheerio = require('cheerio');

const model = {
    async modify(city, region) {
        let total = '';
        // let xianRegion = {
        //     beilin: [],
        //     xixian1: [],
        //     gaoling1: [],
        //     xinchengqu: [], // 1438
        //     changan4: [], // 2549
        //     weiyang: ['a2a6a7a8', 'a1a3', 'a4', 'a5'], // a2a6a7a8 ==>2423
        //     baqiao: ['l1l4l5l6', 'l2l3'],
        //     lianhu: ['l1l4l5l6', 'l2l3'],
        //     yanta: ['a1a7', 'a2a8', 'a3', 'ba90ea100', 'ba101ea125', 'ba126ea150', 'a6'],
        // };
        await superagent.get(`https://${city}.lianjia.com/ershoufang/pg1/`).end(async (err, res) => {
            let $ = null;
            try {
                $ = await cheerio.load(res.text);
            } catch (error) {
                console.log(error);
            }
            if (err) {
                console.log(`the function is take error  ${err}`);
            } else {
                $('div#content div.leftContent div.resultDes h2.total span').each((index, element) => {
                    total = element.children[0].data.trim();
                });
            }
            console.log(`total === ${total}`);
        });
        await model.waitSeconds(1);
        for (let i = 0; i < 100; i++) {
            for (let [key, value] of Object.entries(region)) {
                if (value.length === 0) {  // 数据较少的部分
                    await superagent.get(`https://${city}.lianjia.com/ershoufang/${key}/${i === 0 ? '' : `pg${i + 1}`}/`).end(async (err, res) => {
                        let $ = null;
                        try {
                            $ = await cheerio.load(res.text);
                        } catch (error) {
                            console.log(error);
                        }
                        if (err) {
                            console.log(`the function is take error  ${err}`);
                        } else {
                            let modifyData = await model.commonPart($, total);
                            if (modifyData !== 'noResult') {
                                await database.xianData([...modifyData]);
                            }
                            i === 99 && console.log(`西安 ${key} 写入结束`);
                        }
                    });
                } else {
                    value.forEach(async (item) => {
                        await superagent.get(`https://xa.lianjia.com/ershoufang/${key}/${item}/${i === 0 ? '' : `pg${i + 1}`}/`).end(async (err, res) => {
                            let $ = null;
                            try {
                                $ = await cheerio.load(res.text);
                            } catch (error) {
                                console.log(`解析出错位置${key}/${item}/pg${i + 1}/`);
                            }
                            if (err) {
                                console.log(`the function is take error  ${err}`);
                            } else {
                                let modifyData = await model.commonPart($, total);
                                if (modifyData !== 'noResult') {
                                    await database.xianData([...modifyData]);
                                }
                                i === 99 && console.log(`西安 ${key}/${item}/ 写入结束`);
                            }
                        });
                    });
                }
            }
        }
        return {code: 0, data: total};
    },

    async  commonPart($, total) {
        let myDate = new Date();
        let data = [];
        let datasSring = myDate.toLocaleDateString();
        let noData = $('div#content div.m-noresult');
        if (noData['0'] && noData['0'].attribs.class === 'm-noresult') {
            return 'noResult';
        }
        await $('div#content ul.sellListContent li div.info').each((i, element) => {
            let title = ''; // 标题
            let address = ''; // 地址
            let addressSupplement = ''; // 地址补充
            let floodSupplement = ''; // 楼层以及实际的楼层位置补充
            let flood = ''; // 楼层以及实际的楼层位置
            let followInfo = ''; // 关注,带看,发布时间
            let tag = []; // 标签
            let price = ''; // 总价
            let priceSign = ''; // 单价
            let newPush = '';
            element.children.forEach((item, index) => {
                switch (index) {
                    case 0:
                        title = item.children[0].children[0].data;
                        item.children.forEach(titleItem => {
                            if (titleItem.name === 'span') {
                                newPush = '新上';
                            }
                        });
                        title = item.children[0].children[0].data;
                        break;

                    case 1:
                        item.children[0].children.forEach(item => {
                            if (item.name === 'a') {
                                address = item.children[0].data;
                            }
                            if (item.type === 'text') {
                                addressSupplement = item.data;
                            }
                        });
                        break;

                    case 2:
                        item.children[0].children.forEach(item => {
                            if (item.name === 'a') {
                                flood = item.children[0].data;
                            }
                            if (item.type === 'text') {
                                floodSupplement = item.data;
                            }
                        });
                        break;

                    case 3:
                        followInfo = item.children[1].data;
                        break;

                    case 4:
                        item.children.forEach(element => {
                            tag.push(element.children[0].data);
                        });
                        // console.log('tag', item.children[0].children);
                        break;

                    case 5:
                        item.children.forEach((element, number) => {
                            if (number === 0) {
                                price = element.children[0].children[0].data; // 总价
                            } else {
                                priceSign = element.children[0].children[0].data; // 单价
                            }
                        });
                        break;

                    default:
                        break;
                }
            });
            data.push(
                {
                    'title': title, 'address': address, 'addressSupplement': addressSupplement,
                    'flood': flood, 'floodSupplement': floodSupplement, 'followInfo': followInfo,
                    'tag': tag.join(','), 'newPush': newPush, datasSring,
                    price: price, priceSign: priceSign, total: total, time: new Date()
                }
            );
        });
        return data;
    },

    waitSeconds(time) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, time * 1000 || 3000);
        });
    }
};
module.exports = model;