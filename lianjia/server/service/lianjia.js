const superagent = require('superagent');
const database = require('./database');
// const waitRandom = require('../util/common')
const cheerio = require('cheerio');

const model = {
    async waitRandom(start, end) {
        return new Promise(resolve => {
            let time = start + Math.random() * (end - start)
            setTimeout(() => {
                resolve();
            }, time.toFixed(0) * 1000 || 3000);
        });
    },

    async waitSecond(time) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, time * 1000 || 3000);
        });
    },

    async lianjia() {
        let total = '';
        let data = [];
        // let $ = await cheerio.load(res.text);
        for (let i = 0; i < 100; i++) {
            (function () {
                setTimeout(async () => {
                    await superagent.get(`https://xa.lianjia.com/ershoufang/pg${i + 1}/`).end(async (err, res) => {
                        let $ = null;
                        try {
                            $ = await cheerio.load(res.text);

                        } catch (error) {
                            console.log(`解析出错,错误的页码是 ${i + 1}`);

                        }
                        if (err) {
                            console.log(`the function is take error  ${err}`)
                        } else {
                            $('div#content div.leftContent div.resultDes h2.total span').each((index, element) => {
                                total = element.children[0].data;
                            });
                            await $('div#content ul.sellListContent li div.info').each((index, element) => {
                                let title = ''; // 标题
                                let address = ''; // 地址
                                let addressSupplement = ''; // 地址补充
                                let floodSupplement = ''; // 楼层以及实际的楼层位置补充
                                let flood = ''; // 楼层以及实际的楼层位置
                                let followInfo = ''; // 关注,带看,发布时间
                                let tag = []; // 标签
                                let price = ''; // 总价
                                let priceSign = ''; // 单价
                                // element.children[0].children[0].children[0].data.trim();
                                element.children.forEach((item, index) => {
                                    switch (index) {
                                        case 0:
                                            title = item.children[0].children[0].data.trim();
                                            break;

                                        case 1:
                                            item.children[0].children.forEach(item => {
                                                if (item.name === 'a') {
                                                    address = item.children[0].data.trim();
                                                }
                                                if (item.type === 'text') {
                                                    addressSupplement = item.data.trim();
                                                }
                                            })
                                            break;

                                        case 2:
                                            item.children[0].children.forEach(item => {
                                                if (item.name === 'a') {
                                                    flood = item.children[0].data.trim();
                                                }
                                                if (item.type === 'text') {
                                                    floodSupplement = item.data.trim();
                                                }
                                            })
                                            break;

                                        case 3:
                                            followInfo = item.children[1].data;
                                            break;

                                        case 4:
                                            item.children.forEach(element => {
                                                tag.push(element.children[0].data);
                                            })
                                            // console.log('tag', item.children[0].children);
                                            break;

                                        case 5:
                                            item.children.forEach((element, number) => {
                                                if (number === 0) {
                                                    price = element.children[0].children[0].data; // 总价
                                                } else {
                                                    priceSign = element.children[0].children[0].data; // 单价
                                                }
                                            })
                                            break;

                                        default:
                                            break;
                                    }
                                });
                                data.push(
                                    {
                                        'title': title, 'address': address, 'addressSupplement': addressSupplement,
                                        'flood': flood, 'floodSupplement': floodSupplement, 'followInfo': followInfo,
                                        'tag': tag.join(','), price: price, priceSign: priceSign, total: total, time: new Date()
                                    }
                                );
                            });
                            if (i === 0) {
                                console.log(`开始请求数据,预计耗时 2*99 === 200s`);
                            }
                            if (i === 99) {
                                console.log(`开始写入数据,数据量为: ${total.trim()},插入数据库数据为: ${data.length}`);
                                await database.xianLianjia(data)
                            }
                            console.log('test git rebase');

                        }
                    });
                }, 2000 * i)
            })()
        }
        console.log(`the function is take success`)
    }
}

module.exports = model;