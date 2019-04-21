const superagent = require('superagent');
const database = require('./database');
const cheerio = require('cheerio');

const model = {
    async lianjia() {
        let total = '';
        let xianRegion = {
            beilin: [],
            xixian1: [],
            gaoling1: [],
            xinchengqu: [], // 1438
            changan4: [], // 2549
            weiyang: ['l1l4l5l6', 'l2', 'l3'],
            baqiao: ['l1l4l5l6', 'l2l3'],
            lianhu: ['l1l4l5l6', 'l2l3'],
            yanta: ['l1', 'l2', 'l3', 'l4l5l6'],
        };
        /**
         * https://xa.lianjia.com/ershoufang/beilin/
         * https://xa.lianjia.com/ershoufang/weiyang/l1l4l5l6/ 未央 1 3,4,5,6 总计大概是不到 3K
         * https://xa.lianjia.com/ershoufang/weiyang/l2/
         * https://xa.lianjia.com/ershoufang/weiyang/l3/
         * https://xa.lianjia.com/ershoufang/baqiao/l1l4l5l6/
         * https://xa.lianjia.com/ershoufang/baqiao/l2l3/
         * https://xa.lianjia.com/ershoufang/xinchengqu/
         * https://xa.lianjia.com/ershoufang/changan4/
         * https://xa.lianjia.com/ershoufang/lianhu/l2l3/
         * https://xa.lianjia.com/ershoufang/lianhu/l1l4l5l6/
         * https://xa.lianjia.com/ershoufang/yanta/l1/
         * https://xa.lianjia.com/ershoufang/yanta/l2/
         * https://xa.lianjia.com/ershoufang/yanta/l3/
         * https://xa.lianjia.com/ershoufang/yanta/l4l5l6/
         * https://xa.lianjia.com/ershoufang/gaoling1/
         * https://xa.lianjia.com/ershoufang/xixian1/
         */
        await superagent.get(`https://xa.lianjia.com/ershoufang/pg1/`).end(async (err, res) => {
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
        await model.waitSeconds(2);
        for (let [key, value] of Object.entries(xianRegion)) {
            if (value.length === 0) {
                for (let i = 0; i < 100; i++) {
                    (function () {
                        setTimeout(async () => {
                            await superagent.get(`https://xa.lianjia.com/ershoufang/${key}/pg${i + 1}/`).end(async (err, res) => {
                                let $ = null;
                                try {
                                    $ = await cheerio.load(res.text);

                                } catch (error) {
                                    console.log(`解析出错位置:${key}/${i + 1}`);
                                }
                                if (i === 99) {
                                    console.log(`i === 99 位置:${key}/`);
                                }
                                if (err) {
                                    console.log(`the function is take error  ${err}`);
                                } else {
                                    let data = [];
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
                                                    });
                                                    break;

                                                case 2:
                                                    item.children[0].children.forEach(item => {
                                                        if (item.name === 'a') {
                                                            flood = item.children[0].data.trim();
                                                        }
                                                        if (item.type === 'text') {
                                                            floodSupplement = item.data.trim();
                                                        }
                                                    });
                                                    break;

                                                case 3:
                                                    followInfo = item.children[1].data.trim();
                                                    break;

                                                case 4:
                                                    item.children.forEach(element => {
                                                        tag.push(element.children[0].data.trim());
                                                    });
                                                    break;

                                                case 5:
                                                    item.children.forEach((element, number) => {
                                                        if (number === 0) {
                                                            price = element.children[0].children[0].data.trim(); // 总价
                                                        } else {
                                                            priceSign = element.children[0].children[0].data.trim(); // 单价
                                                        }
                                                    });
                                                    break;

                                                default:
                                                    break;
                                            }
                                        });
                                        data.push({
                                            'title': title, 'address': address, 'addressSupplement': addressSupplement,
                                            'flood': flood, 'floodSupplement': floodSupplement, 'followInfo': followInfo,
                                            'tag': tag.join(','), price: price, priceSign: priceSign, total: total, time: new Date()
                                        });
                                    });
                                    await database.xianLianjia(data);
                                }
                            });
                        }, 1000 * i);
                    })();
                }
            } else {
                for (let i = 0; i < 100; i++) {
                    (function () {
                        setTimeout(async () => {
                            value.forEach(async (item) => {
                                await superagent.get(`https://xa.lianjia.com/ershoufang/${key}/${item}/pg${i + 1}/`).end(async (err, res) => {
                                    let $ = null;
                                    try {
                                        $ = await cheerio.load(res.text);

                                    } catch (error) {
                                        console.log(`解析出错位置:${key}/${item}/${i + 1}`);

                                    }
                                    if (i === 99) {
                                        console.log(`i === 99 位置:${key}/${item}`);
                                    }
                                    if (err) {
                                        console.log(`the function is take error  ${err}`);
                                    } else {
                                        let data = [];
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
                                                        });
                                                        break;

                                                    case 2:
                                                        item.children[0].children.forEach(item => {
                                                            if (item.name === 'a') {
                                                                flood = item.children[0].data.trim();
                                                            }
                                                            if (item.type === 'text') {
                                                                floodSupplement = item.data.trim();
                                                            }
                                                        });
                                                        break;

                                                    case 3:
                                                        followInfo = item.children[1].data.trim();
                                                        break;

                                                    case 4:
                                                        item.children.forEach(element => {
                                                            tag.push(element.children[0].data.trim());
                                                        });
                                                        // console.log('tag', item.children[0].children);
                                                        break;

                                                    case 5:
                                                        item.children.forEach((element, number) => {
                                                            if (number === 0) {
                                                                price = element.children[0].children[0].data.trim(); // 总价
                                                            } else {
                                                                priceSign = element.children[0].children[0].data.trim(); // 单价
                                                            }
                                                        });
                                                        break;

                                                    default:
                                                        break;
                                                }
                                            });
                                            data.push({
                                                'title': title, 'address': address, 'addressSupplement': addressSupplement,
                                                'flood': flood, 'floodSupplement': floodSupplement, 'followInfo': followInfo,
                                                'tag': tag.join(','), price: price, priceSign: priceSign, total: total, time: new Date()
                                            });
                                        });
                                        await database.xianLianjia(data);
                                    }
                                });
                            });
                        }, 1000 * i);
                    })();
                }
            }
        }
        console.log(`the function of xi'an is take success`);
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