const superagent = require('superagent');
const database = require('./database');
const cheerio = require('cheerio');

const model = {
    async lianjia() {
        let total = '';
        let myDate = new Date();
        let datasSring = myDate.toLocaleDateString();
        let Region = {
            pudong: ['p1', 'bp200ep250', 'bp250ep300', 'bp300ep350', 'bp350ep400', 'p4', 'p5', 'p6', 'p7'], // 浦东 18734
            minhang: ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7'], // 闵行
            baoshan: ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7'], // 宝山
            xuhui: ['p1p2p3', 'p4p5p6p7'], // 徐汇
            putuo: ['p1p2p3', 'p4p5p6p7'], //  普陀
            changning: ['p1p2p3', 'p4p5p6p7'], //  普陀
            yangpu: ['p1p2p3', 'p4p5p6p7'], //  普陀
            songjiang: ['p2p3', 'p1p4p5p6p7'], //  普陀
            jiading: ['p1p2', 'p3p4p5p6p7'], //  普陀
            huangpu: ['p1p2p3', 'p4p5p6p7'],
            jingan: [],
            zhabei: [],
            hongkou: [],
            qingpu: [],
            fengxian: [],
            jinshan: [],
        };
        /**
         * https://sh.lianjia.com/ershoufang/pudong/p1/ 1723
         * https://sh.lianjia.com/ershoufang/pudong/bp200ep250/  浦东的数需要这么做,更加详细的细分 4456  = 2079 + 2380 4460 其中冗余数据为4 可以接受
         * https://sh.lianjia.com/ershoufang/pudong/bp250ep300/  浦东的数需要这么做,更加详细的细分 4456  = 2079 + 2380 4460 其中冗余数据为4 可以接受
         * https://sh.lianjia.com/ershoufang/pudong/bp300ep350/  浦东的数需要这么做,更加详细的细分 3812
         * https://sh.lianjia.com/ershoufang/pudong/bp350ep400/  浦东的数需要这么做,更加详细的细分 3812
         * https://sh.lianjia.com/ershoufang/pudong/p4/  2282
         * https://sh.lianjia.com/ershoufang/pudong/p5/  3166
         * https://sh.lianjia.com/ershoufang/pudong/p6/  1023
         * https://sh.lianjia.com/ershoufang/pudong/p7/  2263
         */
        await superagent.get(`https://sh.lianjia.com/ershoufang/pg1/`).end(async (err, res) => {
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
        for (let [key, value] of Object.entries(Region)) {
            if (value.length === 0) {
                for (let i = 0; i < 100; i++) {
                    (function () {
                        setTimeout(async () => {
                            await superagent.get(`https://sh.lianjia.com/ershoufang/${key}/pg${i + 1}/`).end(async (err, res) => {
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
                                            'flood': flood, 'floodSupplement': floodSupplement, 'followInfo': followInfo, 'datasSring': datasSring,
                                            'tag': tag.join(','), price: price, priceSign: priceSign, total: total, time: new Date()
                                        });
                                    });
                                    await database.sh(data);
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
                                await superagent.get(`https://sh.lianjia.com/ershoufang/${key}/${item}/pg${i + 1}/`).end(async (err, res) => {
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
                                                'title': title, 'address': address, 'addressSupplement': addressSupplement, 'datasSring': datasSring,
                                                'flood': flood, 'floodSupplement': floodSupplement, 'followInfo': followInfo,
                                                'tag': tag.join(','), price: price, priceSign: priceSign, total: total, time: new Date()
                                            });
                                        });
                                        await database.sh(data);
                                    }
                                });
                            });
                        }, 1000 * i);
                    })();
                }
            }
        }
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