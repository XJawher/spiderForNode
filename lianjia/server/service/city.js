const superagent = require('superagent');
const database = require('./database');
const cheerio = require('cheerio');

const model = {
    async lianjia() {
        let total = '';
        let cityTotal = [{ province: '安徽', cityEN: 'aq', cityCH: '安庆' }, { province: '安徽', cityEN: 'hf', cityCH: '合肥' }, { province: '安徽', cityEN: 'mas', cityCH: '马鞍山' }, { province: '安徽', cityEN: 'wuhu', cityCH: '芜湖' },
        { province: '北京', cityEN: 'bj', cityCH: '北京' },
        { province: '重庆', cityEN: 'cq', cityCH: '重庆' },
        { province: '福建', cityEN: 'fz', cityCH: '福州' },
        { province: '福建', cityEN: 'quanzhou', cityCH: '泉州' },
        { province: '福建', cityEN: 'xm', cityCH: '厦门' },
        { province: '广东', cityEN: 'dg', cityCH: '东莞' }, { province: '广东', cityEN: 'fs', cityCH: '佛山' }, { province: '广东', cityEN: 'gz', cityCH: '广州' }, { province: '广东', cityEN: 'hui', cityCH: '惠州' }, { province: '广东', cityEN: 'jiangmen', cityCH: '江门' }, { province: '广东', cityEN: 'qy', cityCH: '清远' }, { province: '广东', cityEN: 'sz', cityCH: '深圳' }, { province: '广东', cityEN: 'zh', cityCH: '珠海' }, { province: '广东', cityEN: 'zhanjiang', cityCH: '湛江' }, { province: '广东', cityEN: 'zs', cityCH: '中山' },
        { province: '贵州', cityEN: 'gy', cityCH: '贵阳' },
        { province: '广西', cityEN: 'bh', cityCH: '北海' }, { province: '广西', cityEN: 'gl', cityCH: '桂林' }, { province: '广西', cityEN: 'liuzhou', cityCH: '柳州' }, { province: '广西', cityEN: 'nn', cityCH: '南宁' },
        { province: '甘肃', cityEN: 'lz', cityCH: '兰州' },
        { province: '湖北', cityEN: 'huangshi', cityCH: '黄石' },
        // { province: '湖北', cityEN: 'hg', cityCH: '黄冈' },
        { province: '湖北', cityEN: 'wh', cityCH: '武汉' },
        { province: '湖北', cityEN: 'xy', cityCH: '襄阳' },
        // { province: '湖北', cityEN: 'xn', cityCH: '咸宁' },
        { province: '湖北', cityEN: 'yichang', cityCH: '宜昌' },
        { province: '湖南', cityEN: 'cs', cityCH: '长沙' },
        { province: '湖南', cityEN: 'changde', cityCH: '常德' },
        { province: '湖南', cityEN: 'yy', cityCH: '岳阳' },
        { province: '湖南', cityEN: 'zhuzhou', cityCH: '株洲' },
        { province: '河北', cityEN: 'bd', cityCH: '保定' },
        // { province: '河北', cityEN: 'chengde', cityCH: '承德' },
        // { province: '河北', cityEN: 'hd', cityCH: '邯郸' },
        // { province: '河北', cityEN: 'hs', cityCH: '衡水' },
        { province: '河北', cityEN: 'lf', cityCH: '廊坊' },
        // { province: '河北', cityEN: 'qhd', cityCH: '秦皇岛' },
        { province: '河北', cityEN: 'sjz', cityCH: '石家庄' },
        { province: '河北', cityEN: 'ts', cityCH: '唐山' },
        // { province: '河北', cityEN: 'xt', cityCH: '邢台' },
        // { province: '河北', cityEN: 'zjk', cityCH: '张家口' },
        // { province: '海南', cityEN: 'bt', cityCH: '保亭' },
        // { province: '海南', cityEN: 'cm', cityCH: '澄迈' },
        { province: '海南', cityEN: 'hk', cityCH: '海口' },
        // { province: '海南', cityEN: 'lg', cityCH: '临高' },
        // { province: '海南', cityEN: 'ld', cityCH: '乐东' },
        // { province: '海南', cityEN: 'ls', cityCH: '陵水' },
        // { province: '海南', cityEN: 'qh', cityCH: '琼海' },
        // { province: '海南', cityEN: 'dz', cityCH: '儋州' },
        // { province: '海南', cityEN: 'da', cityCH: '定安' },
        // { province: '海南', cityEN: 'qz', cityCH: '琼中' },
        { province: '海南', cityEN: 'san', cityCH: '三亚' },
        // { province: '海南', cityEN: 'wzs', cityCH: '五指山' },
        // { province: '海南', cityEN: 'wc', cityCH: '文昌' },
        // { province: '海南', cityEN: 'wn', cityCH: '万宁' },
        { province: '河南', cityEN: 'kf', cityCH: '开封' },
        { province: '河南', cityEN: 'luoyang', cityCH: '洛阳' },
        { province: '河南', cityEN: 'xinxiang', cityCH: '新乡' },
        { province: '河南', cityEN: 'xc', cityCH: '许昌' }, { province: '河南', cityEN: 'zz', cityCH: '郑州' },
        { province: '黑龙江', cityEN: 'hrb', cityCH: '哈尔滨' },
        { province: '江苏', cityEN: 'changzhou', cityCH: '常州' }, { province: '江苏', cityEN: 'ha', cityCH: '淮安' },
        { province: '江苏', cityEN: 'nj', cityCH: '南京' },
        { province: '江苏', cityEN: 'nt', cityCH: '南通' }, { province: '江苏', cityEN: 'su', cityCH: '苏州' },
        { province: '江苏', cityEN: 'wx', cityCH: '无锡' },
        { province: '江苏', cityEN: 'zj', cityCH: '镇江' }, { province: '江苏', cityEN: 'xz', cityCH: '徐州' },
        { province: '江苏', cityEN: 'yc', cityCH: '盐城' },
        { province: '吉林', cityEN: 'jl', cityCH: '吉林' }, { province: '吉林', cityEN: 'cc', cityCH: '长春' },
        { province: '江西', cityEN: 'ganzhou', cityCH: '赣州' }, { province: '江西', cityEN: 'jiujiang', cityCH: '九江' }, { province: '江西', cityEN: 'jian', cityCH: '吉安' }, { province: '江西', cityEN: 'sr', cityCH: '上饶' }, { province: '江西', cityEN: 'nc', cityCH: '南昌' },
        { province: '辽宁', cityEN: 'dl', cityCH: '大连' }, { province: '辽宁', cityEN: 'dd', cityCH: '丹东' },
        { province: '辽宁', cityEN: 'sy', cityCH: '沈阳' },
        { province: '内蒙古', cityEN: 'hhht', cityCH: '呼和浩特' },
        { province: '宁夏', cityEN: 'yinchuan', cityCH: '银川' },
        { province: '上海', cityEN: 'sh', cityCH: '上海' },
        { province: '四川', cityEN: 'cd', cityCH: '成都' },
        // { province: '四川', cityEN: 'dy', cityCH: '德阳' },
        { province: '四川', cityEN: 'dazhou', cityCH: '达州' },
        //  { province: '四川', cityEN: 'leshan', cityCH: '乐山' },
        { province: '四川', cityEN: 'liangshan', cityCH: '凉山' },
        { province: '四川', cityEN: 'mianyang', cityCH: '绵阳' },
        { province: '四川', cityEN: 'ms', cityCH: '眉山' },
        { province: '四川', cityEN: 'nanchong', cityCH: '南充' },
        { province: '山东', cityEN: 'jn', cityCH: '济南' }, { province: '山东', cityEN: 'linyi', cityCH: '临沂' }, { province: '山东', cityEN: 'qd', cityCH: '青岛' }, { province: '山东', cityEN: 'wf', cityCH: '潍坊' }, { province: '山东', cityEN: 'weihai', cityCH: '威海' }, { province: '山东', cityEN: 'yt', cityCH: '烟台' }, { province: '山东', cityEN: 'zb', cityCH: '淄博' },
        { province: '陕西', cityEN: 'xianyang', cityCH: '咸阳' }, { province: '陕西', cityEN: 'hanzhong', cityCH: '汉中' }, { province: '陕西', cityEN: 'baoji', cityCH: '宝鸡' }, { province: '陕西', cityEN: 'xa', cityCH: '西安' },
        // { province: '山西', cityEN: 'jz', cityCH: '晋中' },
        { province: '山西', cityEN: 'ty', cityCH: '太原' },
        { province: '天津', cityEN: 'tj', cityCH: '天津' },
        // { province: '云南', cityEN: 'dali', cityCH: '大理' },
        { province: '云南', cityEN: 'km', cityCH: '昆明' },
        // { province: '云南', cityEN: 'xsbn', cityCH: '西双版纳' },
        { province: '浙江', cityEN: 'hz', cityCH: '杭州' },
        { province: '浙江', cityEN: 'huzhou', cityCH: '湖州' },
        { province: '浙江', cityEN: 'jx', cityCH: '嘉兴' },
        { province: '浙江', cityEN: 'jh', cityCH: '金华' },
        { province: '浙江', cityEN: 'nb', cityCH: '宁波' },
        { province: '浙江', cityEN: 'sx', cityCH: '绍兴' },
        { province: '浙江', cityEN: 'taizhou', cityCH: '台州' },
        { province: '浙江', cityEN: 'wz', cityCH: '温州' }];
        let errorCity = [];
        // let errorDataInsert = [];
        for (let i = 0; i < cityTotal.length; i++) {
            (function () {
                setTimeout(async () => {
                    await superagent.get(`https://${cityTotal[i].cityEN}.lianjia.com/ershoufang/`).end(async (err, res) => {
                        let $ = null;
                        try {
                            $ = await cheerio.load(res.text);

                        } catch (error) {
                            console.log(`全国解析出错,错误的位置数据源为${cityTotal[i].province}省,${cityTotal[i].cityCH}市的数据`);
                            errorCity.push(cityTotal[i]);
                        }
                        if (err) {
                            console.log(`全国  ====>>>>>  ${err}`);
                        } else {
                            let data = [];
                            $('div#content div.leftContent div.resultDes h2.total span').each((index, element) => {
                                total = element.children[0].data;
                            });
                            data.push({
                                province: cityTotal[i].province, cityCH: cityTotal[i].cityCH, cityEN: cityTotal[i].cityEN,
                                total: total, time: new Date()
                            });
                            console.log(`第${i}次请求,数据源为${cityTotal[i].province}省,${cityTotal[i].cityCH}市的数据,总量为:${total},总共有${cityTotal.length}个城市`);
                            await database.city(data);
                        }
                    });
                }, 4000 * i);
            })();
        }
    },
    chengdu() {
        let total = '';
        for (let i = 0; i < 100; i++) {
            (function () {
                setTimeout(async () => {
                    await superagent.get(`https://cd.lianjia.com/ershoufang/pg${i + 1}/`).end(async (err, res) => {
                        let $ = null;
                        try {
                            $ = await cheerio.load(res.text);

                        } catch (error) {
                            console.log(`成都解析出错,错误的页码是 ${i + 1}`);

                        }
                        if (err) {
                            console.log(` 成都 ====>>>>>  ${err}`);
                        } else {
                            let data = [];
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
                                data.push(
                                    {
                                        'title': title, 'address': address, 'addressSupplement': addressSupplement,
                                        'flood': flood, 'floodSupplement': floodSupplement, 'followInfo': followInfo,
                                        'tag': tag.join(','), price: price, priceSign: priceSign, total: total, time: new Date()
                                    }
                                );
                            });
                            if (i === 99) {
                                console.log(`结束成都数据写入,今日的总量数据为 ${total}`);
                            }
                            await database.chengduData(data);
                        }
                    });
                }, 2000 * i);
            })();
        }
    },
    hf() {
        let total = '';
        for (let i = 0; i < 100; i++) {
            (function () {
                setTimeout(async () => {
                    await superagent.get(`https://hf.lianjia.com/ershoufang/pg${i + 1}/`).end(async (err, res) => {
                        let $ = null;
                        try {
                            $ = await cheerio.load(res.text);

                        } catch (error) {
                            console.log(`合肥解析出错,错误的页码是 ${i + 1}`);

                        }
                        if (err) {
                            console.log(` 合肥 ====>>>>>  ${err}`);
                        } else {
                            let data = [];
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
                                data.push(
                                    {
                                        'title': title, 'address': address, 'addressSupplement': addressSupplement,
                                        'flood': flood, 'floodSupplement': floodSupplement, 'followInfo': followInfo,
                                        'tag': tag.join(','), price: price, priceSign: priceSign, total: total, time: new Date()
                                    }
                                );
                            });
                            if (i === 99) {
                                console.log(`合肥数据写入成功数据为 ${total}!!!`);
                            }
                            await database.hf(data);
                        }
                    });
                }, 2000 * i);
            })();
        }
    },

    bj() {
        let total = '';
        for (let i = 0; i < 100; i++) {
            (function () {
                setTimeout(async () => {
                    await superagent.get(`https://bj.lianjia.com/ershoufang/pg${i + 1}/`).end(async (err, res) => {
                        let $ = null;
                        try {
                            $ = await cheerio.load(res.text);

                        } catch (error) {
                            console.log(`北京解析出错,错误的页码是 ${i + 1}`);

                        }
                        if (err) {
                            console.log(`北京  ====>>>>>  ${err}`);
                        } else {
                            let data = [];
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
                                data.push(
                                    {
                                        'title': title, 'address': address, 'addressSupplement': addressSupplement,
                                        'flood': flood, 'floodSupplement': floodSupplement, 'followInfo': followInfo,
                                        'tag': tag.join(','), price: price, priceSign: priceSign, total: total, time: new Date()
                                    }
                                );
                            });
                            if (i === 99) {
                                console.log(`北京bj数据写入成功数据为 ${total}!!!`);
                            }
                            await database.bj(data);
                        }
                    });
                }, 2000 * i);
            })();
        }
    },

    cq() { //重庆cq
        let total = '';
        for (let i = 0; i < 100; i++) {
            (function () {
                setTimeout(async () => {
                    await superagent.get(`https://cq.lianjia.com/ershoufang/pg${i + 1}/`).end(async (err, res) => {
                        let $ = null;
                        try {
                            $ = await cheerio.load(res.text);

                        } catch (error) {
                            console.log(`重庆解析出错,错误的页码是 ${i + 1}`);

                        }
                        if (err) {
                            console.log(`重庆  ====>>>>>  ${err}`);
                        } else {
                            let data = [];
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
                                data.push(
                                    {
                                        'title': title, 'address': address, 'addressSupplement': addressSupplement,
                                        'flood': flood, 'floodSupplement': floodSupplement, 'followInfo': followInfo,
                                        'tag': tag.join(','), price: price, priceSign: priceSign, total: total, time: new Date()
                                    }
                                );
                            });
                            if (i === 99) {
                                console.log(`重庆cq数据写入成功数据为 ${total}!!!`);
                            }
                            await database.cq(data);
                        }
                    });
                }, 2000 * i);
            })();
        }
    },

    fz() { // 福州fz
        let total = '';
        for (let i = 0; i < 100; i++) {
            (function () {
                setTimeout(async () => {
                    await superagent.get(`https://fz.lianjia.com/ershoufang/pg${i + 1}/`).end(async (err, res) => {
                        let $ = null;
                        try {
                            $ = await cheerio.load(res.text);

                        } catch (error) {
                            console.log(`福州解析出错,错误的页码是 ${i + 1}`);

                        }
                        if (err) {
                            console.log(` 福州 ====>>>>>  ${err}`);
                        } else {
                            let data = [];
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
                                data.push(
                                    {
                                        'title': title, 'address': address, 'addressSupplement': addressSupplement,
                                        'flood': flood, 'floodSupplement': floodSupplement, 'followInfo': followInfo,
                                        'tag': tag.join(','), price: price, priceSign: priceSign, total: total, time: new Date()
                                    }
                                );
                            });
                            if (i === 99) {
                                console.log(`福州fz数据写入成功数据为 ${total}!!!`);
                            }
                            await database.fz(data);
                        }
                    });
                }, 2000 * i);
            })();
        }
    },

    gz() { // 广州 gz深圳sz 珠海zh
        let total = '';
        for (let i = 0; i < 100; i++) {
            (function () {
                setTimeout(async () => {
                    await superagent.get(`https://gz.lianjia.com/ershoufang/pg${i + 1}/`).end(async (err, res) => {
                        let $ = null;
                        try {
                            $ = await cheerio.load(res.text);

                        } catch (error) {
                            console.log(`广州解析出错,错误的页码是 ${i + 1}`);

                        }
                        if (err) {
                            console.log(`广州  ====>>>>>  ${err}`);
                        } else {
                            let data = [];
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
                                data.push(
                                    {
                                        'title': title, 'address': address, 'addressSupplement': addressSupplement,
                                        'flood': flood, 'floodSupplement': floodSupplement, 'followInfo': followInfo,
                                        'tag': tag.join(','), price: price, priceSign: priceSign, total: total, time: new Date()
                                    }
                                );
                            });
                            if (i === 99) {
                                console.log(`广州gz数据写入成功数据为 ${total}!!!`);
                            }
                            await database.gz(data);
                        }
                    });
                }, 2000 * i);
            })();
        }
    },

    sz() { // 广州 sz深圳sz 珠海zh
        let total = '';
        for (let i = 0; i < 100; i++) {
            (function () {
                setTimeout(async () => {
                    await superagent.get(`https://sz.lianjia.com/ershoufang/pg${i + 1}/`).end(async (err, res) => {
                        let $ = null;
                        try {
                            $ = await cheerio.load(res.text);

                        } catch (error) {
                            console.log(`深圳解析出错,错误的页码是 ${i + 1}`);

                        }
                        if (err) {
                            console.log(`深圳 ===>>>>${err}`);
                        } else {
                            let data = [];
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
                                data.push(
                                    {
                                        'title': title, 'address': address, 'addressSupplement': addressSupplement,
                                        'flood': flood, 'floodSupplement': floodSupplement, 'followInfo': followInfo,
                                        'tag': tag.join(','), price: price, priceSign: priceSign, total: total, time: new Date()
                                    }
                                );
                            });
                            if (i === 99) {
                                console.log(`深圳sz数据写入成功数据为 ${total}!!!`);
                            }
                            await database.sz(data);
                        }
                    });
                }, 2000 * i);
            })();
        }
    },

    gy() { // 贵阳gy
        let total = '';
        for (let i = 0; i < 100; i++) {
            (function () {
                setTimeout(async () => {
                    await superagent.get(`https://gy.lianjia.com/ershoufang/pg${i + 1}/`).end(async (err, res) => {
                        let $ = null;
                        try {
                            $ = await cheerio.load(res.text);

                        } catch (error) {
                            console.log(`贵阳解析出错,错误的页码是 ${i + 1}`);

                        }
                        if (err) {
                            console.log(`贵阳解析出错 ${err}`);
                        } else {
                            let data = [];
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
                                data.push(
                                    {
                                        'title': title, 'address': address, 'addressSupplement': addressSupplement,
                                        'flood': flood, 'floodSupplement': floodSupplement, 'followInfo': followInfo,
                                        'tag': tag.join(','), price: price, priceSign: priceSign, total: total, time: new Date()
                                    }
                                );
                            });
                            if (i === 99) {
                                console.log(`贵阳gy数据写入成功数据为 ${total}!!!`);
                            }
                            await database.gy(data);
                        }
                    });
                }, 2000 * i);
            })();
        }
    },

    nn() { // 南宁nn
        let total = '';
        for (let i = 0; i < 100; i++) {
            (function () {
                setTimeout(async () => {
                    await superagent.get(`https://nn.lianjia.com/ershoufang/pg${i + 1}/`).end(async (err, res) => {
                        let $ = null;
                        try {
                            $ = await cheerio.load(res.text);

                        } catch (error) {
                            console.log(`南宁解析出错,错误的页码是 ${i + 1}`);

                        }
                        if (err) {
                            console.log(` 南宁 ====>>>>>  ${err}`);
                        } else {
                            let data = [];
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
                                data.push(
                                    {
                                        'title': title, 'address': address, 'addressSupplement': addressSupplement,
                                        'flood': flood, 'floodSupplement': floodSupplement, 'followInfo': followInfo,
                                        'tag': tag.join(','), price: price, priceSign: priceSign, total: total, time: new Date()
                                    }
                                );
                            });
                            if (i === 99) {
                                console.log(`南宁nn数据写入成功数据为 ${total}!!!`);
                            }
                            await database.nn(data);
                        }
                    });
                }, 2000 * i);
            })();
        }
    },

    lz() { // 兰州lz
        let total = '';
        for (let i = 0; i < 100; i++) {
            (function () {
                setTimeout(async () => {
                    await superagent.get(`https://lz.lianjia.com/ershoufang/pg${i + 1}/`).end(async (err, res) => {
                        let $ = null;
                        try {
                            $ = await cheerio.load(res.text);

                        } catch (error) {
                            console.log(`解析出错,错误的页码是 ${i + 1}`);

                        }
                        if (err) {
                            console.log(`  ====>>>>>  ${err}`);
                        } else {
                            let data = [];
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
                                data.push(
                                    {
                                        'title': title, 'address': address, 'addressSupplement': addressSupplement,
                                        'flood': flood, 'floodSupplement': floodSupplement, 'followInfo': followInfo,
                                        'tag': tag.join(','), price: price, priceSign: priceSign, total: total, time: new Date()
                                    }
                                );
                            });
                            if (i === 99) {
                                console.log(`兰州lz数据写入成功数据为 ${total}!!!`);
                            }
                            await database.lz(data);
                        }
                    });
                }, 2000 * i);
            })();
        }
    },

    wh() { // 武汉wh
        let total = '';
        for (let i = 0; i < 100; i++) {
            (function () {
                setTimeout(async () => {
                    await superagent.get(`https://wh.lianjia.com/ershoufang/pg${i + 1}/`).end(async (err, res) => {
                        let $ = null;
                        try {
                            $ = await cheerio.load(res.text);

                        } catch (error) {
                            console.log(`武汉解析出错,错误的页码是 ${i + 1}`);

                        }
                        if (err) {
                            console.log(` 武汉 ====>>>>>  ${err}`);
                        } else {
                            let data = [];
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
                                data.push(
                                    {
                                        'title': title, 'address': address, 'addressSupplement': addressSupplement,
                                        'flood': flood, 'floodSupplement': floodSupplement, 'followInfo': followInfo,
                                        'tag': tag.join(','), price: price, priceSign: priceSign, total: total, time: new Date()
                                    }
                                );
                            });
                            if (i === 99) {
                                console.log(`武汉wh数据写入成功数据为 ${total}!!!`);
                            }
                            await database.wh(data);
                        }
                    });
                }, 2000 * i);
            })();
        }
    },

    cs() { // 长沙cs
        let total = '';
        for (let i = 0; i < 100; i++) {
            (function () {
                setTimeout(async () => {
                    await superagent.get(`https://cs.lianjia.com/ershoufang/pg${i + 1}/`).end(async (err, res) => {
                        let $ = null;
                        try {
                            $ = await cheerio.load(res.text);

                        } catch (error) {
                            console.log(`长沙解析出错,错误的页码是 ${i + 1}`);

                        }
                        if (err) {
                            console.log(` 长沙 ====>>>>>  ${err}`);
                        } else {
                            let data = [];
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
                                data.push(
                                    {
                                        'title': title, 'address': address, 'addressSupplement': addressSupplement,
                                        'flood': flood, 'floodSupplement': floodSupplement, 'followInfo': followInfo,
                                        'tag': tag.join(','), price: price, priceSign: priceSign, total: total, time: new Date()
                                    }
                                );
                            });
                            if (i === 99) {
                                console.log(`长沙cs数据写入成功数据为 ${total}!!!`);
                            }
                            await database.cs(data);
                        }
                    });
                }, 2000 * i);
            })();
        }
    },

    sjz() { // 石家庄sjz
        let total = '';
        for (let i = 0; i < 100; i++) {
            (function () {
                setTimeout(async () => {
                    await superagent.get(`https://sjz.lianjia.com/ershoufang/pg${i + 1}/`).end(async (err, res) => {
                        let $ = null;
                        try {
                            $ = await cheerio.load(res.text);

                        } catch (error) {
                            console.log(`石家庄解析出错,错误的页码是 ${i + 1}`);

                        }
                        if (err) {
                            console.log(` 石家庄 ====>>>>>  ${err}`);
                        } else {
                            let data = [];
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
                                data.push(
                                    {
                                        'title': title, 'address': address, 'addressSupplement': addressSupplement,
                                        'flood': flood, 'floodSupplement': floodSupplement, 'followInfo': followInfo,
                                        'tag': tag.join(','), price: price, priceSign: priceSign, total: total, time: new Date()
                                    }
                                );
                            });
                            if (i === 99) {
                                console.log(`石家庄sjz数据写入成功数据为 ${total}!!!`);
                            }
                            await database.sjz(data);
                        }
                    });
                }, 2000 * i);
            })();
        }
    },

    hk() { // 海口hk
        let total = '';
        for (let i = 0; i < 100; i++) {
            (function () {
                setTimeout(async () => {
                    await superagent.get(`https://hk.lianjia.com/ershoufang/pg${i + 1}/`).end(async (err, res) => {
                        let $ = null;
                        try {
                            $ = await cheerio.load(res.text);

                        } catch (error) {
                            console.log(`海口解析出错,错误的页码是 ${i + 1}`);

                        }
                        if (err) {
                            console.log(` 海口 ====>>>>>  ${err}`);
                        } else {
                            let data = [];
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
                                data.push(
                                    {
                                        'title': title, 'address': address, 'addressSupplement': addressSupplement,
                                        'flood': flood, 'floodSupplement': floodSupplement, 'followInfo': followInfo,
                                        'tag': tag.join(','), price: price, priceSign: priceSign, total: total, time: new Date()
                                    }
                                );
                            });
                            if (i === 99) {
                                console.log(`海口hk数据写入成功数据为 ${total}!!!`);
                            }
                            await database.hk(data);
                        }
                    });
                }, 2000 * i);
            })();
        }
    },

    zz() { // 郑州 zz
        let total = '';
        for (let i = 0; i < 100; i++) {
            (function () {
                setTimeout(async () => {
                    await superagent.get(`https://zz.lianjia.com/ershoufang/pg${i + 1}/`).end(async (err, res) => {
                        let $ = null;
                        try {
                            $ = await cheerio.load(res.text);

                        } catch (error) {
                            console.log(`郑州解析出错,错误的页码是 ${i + 1}`);

                        }
                        if (err) {
                            console.log(` 郑州 ====>>>>>  ${err}`);
                        } else {
                            let data = [];
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
                                data.push(
                                    {
                                        'title': title, 'address': address, 'addressSupplement': addressSupplement,
                                        'flood': flood, 'floodSupplement': floodSupplement, 'followInfo': followInfo,
                                        'tag': tag.join(','), price: price, priceSign: priceSign, total: total, time: new Date()
                                    }
                                );
                            });
                            if (i === 99) {
                                console.log(`郑州zz数据写入成功数据为 ${total}!!!`);
                            }
                            await database.zz(data);
                        }
                    });
                }, 2000 * i);
            })();
        }
    },

    hrb() { //哈尔滨hrb
        let total = '';
        for (let i = 0; i < 100; i++) {
            (function () {
                setTimeout(async () => {
                    await superagent.get(`https://hrb.lianjia.com/ershoufang/pg${i + 1}/`).end(async (err, res) => {
                        let $ = null;
                        try {
                            $ = await cheerio.load(res.text);

                        } catch (error) {
                            console.log(`哈尔滨解析出错,错误的页码是 ${i + 1}`);

                        }
                        if (err) {
                            console.log(` 哈尔滨 ====>>>>>  ${err}`);
                        } else {
                            let data = [];
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
                                data.push(
                                    {
                                        'title': title, 'address': address, 'addressSupplement': addressSupplement,
                                        'flood': flood, 'floodSupplement': floodSupplement, 'followInfo': followInfo,
                                        'tag': tag.join(','), price: price, priceSign: priceSign, total: total, time: new Date()
                                    }
                                );
                            });
                            if (i === 99) {
                                console.log(`哈尔滨hrb数据写入成功数据为 ${total}!!!`);
                            }
                            await database.hrb(data);
                        }
                    });
                }, 2000 * i);
            })();
        }
    },

    nj() { //南京nj
        let total = '';
        for (let i = 0; i < 100; i++) {
            (function () {
                setTimeout(async () => {
                    await superagent.get(`https://nj.lianjia.com/ershoufang/pg${i + 1}/`).end(async (err, res) => {
                        let $ = null;
                        try {
                            $ = await cheerio.load(res.text);

                        } catch (error) {
                            console.log(`南京nj解析出错,错误的页码是 ${i + 1}`);

                        }
                        if (err) {
                            console.log(` 南京nj ====>>>>>  ${err}`);
                        } else {
                            let data = [];
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
                                data.push(
                                    {
                                        'title': title, 'address': address, 'addressSupplement': addressSupplement,
                                        'flood': flood, 'floodSupplement': floodSupplement, 'followInfo': followInfo,
                                        'tag': tag.join(','), price: price, priceSign: priceSign, total: total, time: new Date()
                                    }
                                );
                            });
                            if (i === 99) {
                                console.log(`南京njnj数据写入成功数据为 ${total}!!!`);
                            }
                            await database.nj(data);
                        }
                    });
                }, 2000 * i);
            })();
        }
    },

    cc() { //长春cc
        let total = '';
        for (let i = 0; i < 100; i++) {
            (function () {
                setTimeout(async () => {
                    await superagent.get(`https://cc.lianjia.com/ershoufang/pg${i + 1}/`).end(async (err, res) => {
                        let $ = null;
                        try {
                            $ = await cheerio.load(res.text);

                        } catch (error) {
                            console.log(`长春cc解析出错,错误的页码是 ${i + 1}`);

                        }
                        if (err) {
                            console.log(` 长春cc ====>>>>>  ${err}`);
                        } else {
                            let data = [];
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
                                data.push(
                                    {
                                        'title': title, 'address': address, 'addressSupplement': addressSupplement,
                                        'flood': flood, 'floodSupplement': floodSupplement, 'followInfo': followInfo,
                                        'tag': tag.join(','), price: price, priceSign: priceSign, total: total, time: new Date()
                                    }
                                );
                            });
                            if (i === 99) {
                                console.log(`长春cc数据写入成功数据为 ${total}!!!`);
                            }
                            await database.cc(data);
                        }
                    });
                }, 2000 * i);
            })();
        }
    },

    nc() { //南昌nc
        let total = '';
        for (let i = 0; i < 100; i++) {
            (function () {
                setTimeout(async () => {
                    await superagent.get(`https://nc.lianjia.com/ershoufang/pg${i + 1}/`).end(async (err, res) => {
                        let $ = null;
                        try {
                            $ = await cheerio.load(res.text);

                        } catch (error) {
                            console.log(`南昌nc解析出错,错误的页码是 ${i + 1}`);

                        }
                        if (err) {
                            console.log(` 南昌nc ====>>>>>  ${err}`);
                        } else {
                            let data = [];
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
                                data.push(
                                    {
                                        'title': title, 'address': address, 'addressSupplement': addressSupplement,
                                        'flood': flood, 'floodSupplement': floodSupplement, 'followInfo': followInfo,
                                        'tag': tag.join(','), price: price, priceSign: priceSign, total: total, time: new Date()
                                    }
                                );
                            });
                            if (i === 99) {
                                console.log(`南昌nc数据写入成功数据为 ${total}!!!`);
                            }
                            await database.nc(data);
                        }
                    });
                }, 2000 * i);
            })();
        }
    },

    sy() { // 沈阳sy
        let total = '';
        for (let i = 0; i < 100; i++) {
            (function () {
                setTimeout(async () => {
                    await superagent.get(`https://sy.lianjia.com/ershoufang/pg${i + 1}/`).end(async (err, res) => {
                        let $ = null;
                        try {
                            $ = await cheerio.load(res.text);

                        } catch (error) {
                            console.log(`沈阳sy数据解析出错,错误的页码是 ${i + 1}`);

                        }
                        if (err) {
                            console.log(` 沈阳sy ====>>>>>  ${err}`);
                        } else {
                            let data = [];
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
                                data.push(
                                    {
                                        'title': title, 'address': address, 'addressSupplement': addressSupplement,
                                        'flood': flood, 'floodSupplement': floodSupplement, 'followInfo': followInfo,
                                        'tag': tag.join(','), price: price, priceSign: priceSign, total: total, time: new Date()
                                    }
                                );
                            });
                            if (i === 99) {
                                console.log(`沈阳sy数据写入成功数据为 ${total}!!!`);
                            }
                            await database.sy(data);
                        }
                    });
                }, 2000 * i);
            })();
        }
    },

    hhht() { // 呼和浩特hhht
        let total = '';
        for (let i = 0; i < 100; i++) {
            (function () {
                setTimeout(async () => {
                    await superagent.get(`https://hhht.lianjia.com/ershoufang/pg${i + 1}/`).end(async (err, res) => {
                        let $ = null;
                        try {
                            $ = await cheerio.load(res.text);

                        } catch (error) {
                            console.log(`呼和浩特hhht解析出错,错误的页码是 ${i + 1}`);

                        }
                        if (err) {
                            console.log(` 呼和浩特hhht ====>>>>>  ${err}`);
                        } else {
                            let data = [];
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
                                data.push(
                                    {
                                        'title': title, 'address': address, 'addressSupplement': addressSupplement,
                                        'flood': flood, 'floodSupplement': floodSupplement, 'followInfo': followInfo,
                                        'tag': tag.join(','), price: price, priceSign: priceSign, total: total, time: new Date()
                                    }
                                );
                            });
                            if (i === 99) {
                                console.log(`呼和浩特hhht数据写入成功数据为 ${total}!!!`);
                            }
                            await database.hhht(data);
                        }
                    });
                }, 2000 * i);
            })();
        }
    },

    jn() { // 济南jn
        let total = '';
        for (let i = 0; i < 100; i++) {
            (function () {
                setTimeout(async () => {
                    await superagent.get(`https://jn.lianjia.com/ershoufang/pg${i + 1}/`).end(async (err, res) => {
                        let $ = null;
                        try {
                            $ = await cheerio.load(res.text);

                        } catch (error) {
                            console.log(`济南jn解析出错,错误的页码是 ${i + 1}`);

                        }
                        if (err) {
                            console.log(` 济南jn ====>>>>>  ${err}`);
                        } else {
                            let data = [];
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
                                data.push(
                                    {
                                        'title': title, 'address': address, 'addressSupplement': addressSupplement,
                                        'flood': flood, 'floodSupplement': floodSupplement, 'followInfo': followInfo,
                                        'tag': tag.join(','), price: price, priceSign: priceSign, total: total, time: new Date()
                                    }
                                );
                            });
                            if (i === 99) {
                                console.log(`济南jn数据写入成功数据为 ${total}!!!`);
                            }
                            await database.jn(data);
                        }
                    });
                }, 2000 * i);
            })();
        }
    },

    ty() { //  太原ty
        let total = '';
        for (let i = 0; i < 100; i++) {
            (function () {
                setTimeout(async () => {
                    await superagent.get(`https://ty.lianjia.com/ershoufang/pg${i + 1}/`).end(async (err, res) => {
                        let $ = null;
                        try {
                            $ = await cheerio.load(res.text);

                        } catch (error) {
                            console.log(`太原ty解析出错,错误的页码是 ${i + 1}`);

                        }
                        if (err) {
                            console.log(` 太原ty ====>>>>>  ${err}`);
                        } else {
                            let data = [];
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
                                data.push(
                                    {
                                        'title': title, 'address': address, 'addressSupplement': addressSupplement,
                                        'flood': flood, 'floodSupplement': floodSupplement, 'followInfo': followInfo,
                                        'tag': tag.join(','), price: price, priceSign: priceSign, total: total, time: new Date()
                                    }
                                );
                            });
                            if (i === 99) {
                                console.log(`太原ty数据写入成功数据为 ${total}!!!`);
                            }
                            await database.ty(data);
                        }
                    });
                }, 2000 * i);
            })();
        }
    },

    tj() { // 天津tj
        let total = '';
        for (let i = 0; i < 100; i++) {
            (function () {
                setTimeout(async () => {
                    await superagent.get(`https://tj.lianjia.com/ershoufang/pg${i + 1}/`).end(async (err, res) => {
                        let $ = null;
                        try {
                            $ = await cheerio.load(res.text);

                        } catch (error) {
                            console.log(`天津tj解析出错,错误的页码是 ${i + 1}`);

                        }
                        if (err) {
                            console.log(` 天津tj ====>>>>>  ${err}`);
                        } else {
                            let data = [];
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
                                data.push(
                                    {
                                        'title': title, 'address': address, 'addressSupplement': addressSupplement,
                                        'flood': flood, 'floodSupplement': floodSupplement, 'followInfo': followInfo,
                                        'tag': tag.join(','), price: price, priceSign: priceSign, total: total, time: new Date()
                                    }
                                );
                            });
                            if (i === 99) {
                                console.log(`天津tj数据写入成功数据为 ${total}!!!`);
                            }
                            await database.tj(data);
                        }
                    });
                }, 2000 * i);
            })();
        }
    },

    km() { // 昆明km
        let total = '';
        for (let i = 0; i < 100; i++) {
            (function () {
                setTimeout(async () => {
                    await superagent.get(`https://km.lianjia.com/ershoufang/pg${i + 1}/`).end(async (err, res) => {
                        let $ = null;
                        try {
                            $ = await cheerio.load(res.text);

                        } catch (error) {
                            console.log(`昆明km解析出错,错误的页码是 ${i + 1}`);

                        }
                        if (err) {
                            console.log(` 昆明km ====>>>>>  ${err}`);
                        } else {
                            let data = [];
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
                                data.push(
                                    {
                                        'title': title, 'address': address, 'addressSupplement': addressSupplement,
                                        'flood': flood, 'floodSupplement': floodSupplement, 'followInfo': followInfo,
                                        'tag': tag.join(','), price: price, priceSign: priceSign, total: total, time: new Date()
                                    }
                                );
                            });
                            if (i === 99) {
                                console.log(`昆明km数据写入成功数据为 ${total}!!!`);
                            }
                            await database.km(data);
                        }
                    });
                }, 2000 * i);
            })();
        }
    },

    yinchuan() { // 银川yinchuan
        let total = '';
        for (let i = 0; i < 100; i++) {
            (function () {
                setTimeout(async () => {
                    await superagent.get(`https://yinchuan.lianjia.com/ershoufang/pg${i + 1}/`).end(async (err, res) => {
                        let $ = null;
                        try {
                            $ = await cheerio.load(res.text);

                        } catch (error) {
                            console.log(`银川yinchuan解析出错,错误的页码是 ${i + 1}`);

                        }
                        if (err) {
                            console.log(` 银川yinchuan ====>>>>>  ${err}`);
                        } else {
                            let data = [];
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
                                data.push(
                                    {
                                        'title': title, 'address': address, 'addressSupplement': addressSupplement,
                                        'flood': flood, 'floodSupplement': floodSupplement, 'followInfo': followInfo,
                                        'tag': tag.join(','), price: price, priceSign: priceSign, total: total, time: new Date()
                                    }
                                );
                            });
                            if (i === 99) {
                                console.log(`银川yinchuan数据写入成功数据为 ${total}!!!`);
                            }
                            await database.yinchuan(data);
                        }
                    });
                }, 2000 * i);
            })();
        }
    },

    hz() { // 杭州hz
        let total = '';
        for (let i = 0; i < 100; i++) {
            (function () {
                setTimeout(async () => {
                    await superagent.get(`https://hz.lianjia.com/ershoufang/pg${i + 1}/`).end(async (err, res) => {
                        let $ = null;
                        try {
                            $ = await cheerio.load(res.text);

                        } catch (error) {
                            console.log(`杭州hz解析出错,错误的页码是 ${i + 1}`);

                        }
                        if (err) {
                            console.log(` 杭州hz ====>>>>>  ${err}`);
                        } else {
                            let data = [];
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
                                data.push(
                                    {
                                        'title': title, 'address': address, 'addressSupplement': addressSupplement,
                                        'flood': flood, 'floodSupplement': floodSupplement, 'followInfo': followInfo,
                                        'tag': tag.join(','), price: price, priceSign: priceSign, total: total, time: new Date()
                                    }
                                );
                            });
                            if (i === 99) {
                                console.log(`杭州hz数据写入成功数据为 ${total}!!!`);
                            }
                            await database.hz(data);
                        }
                    });
                }, 2000 * i);
            })();
        }
    },

    sh() { // 上海sh
        let total = '';
        for (let i = 0; i < 100; i++) {
            (function () {
                setTimeout(async () => {
                    await superagent.get(`https://sh.lianjia.com/ershoufang/pg${i + 1}/`).end(async (err, res) => {
                        let $ = null;
                        try {
                            $ = await cheerio.load(res.text);

                        } catch (error) {
                            console.log(`上海sh解析出错,错误的页码是 ${i + 1}`);

                        }
                        if (err) {
                            console.log(` 上海sh ====>>>>>  ${err}`);
                        } else {
                            let data = [];
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
                                data.push(
                                    {
                                        'title': title, 'address': address, 'addressSupplement': addressSupplement,
                                        'flood': flood, 'floodSupplement': floodSupplement, 'followInfo': followInfo,
                                        'tag': tag.join(','), price: price, priceSign: priceSign, total: total, time: new Date()
                                    }
                                );
                            });
                            if (i === 99) {
                                console.log(`上海sh数据写入成功数据为 ${total}!!!`);
                            }
                            await database.sh(data);
                        }
                    });
                }, 2000 * i);
            })();
        }
    },
};
module.exports = model;