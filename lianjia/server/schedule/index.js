const cron = require('cron');
const city = require('../service/city');
const xian = require('../service/xian');
const shanghai = require('../service/shanghai');
const shenzhen = require('../service/shenzhen');

/**
 *
 *  秒：0-59
 *  分钟：0-59
 *  小时：0-23
 *  天：1-31
 *  月份：0-11（1月至12月）
 *  星期几：0-6（周日至周六）
 *  每天定时去请求数据,11:00 去请求所有的二手房数据
 *  每天定时去请求数据,10:00 去请求所有的超过 10000 的二手房数据,这里面应该会包括所有的城市,要不要做动态的城市
 *
 */

/**
 * 每天定时去请求数据,11:01:01 去请求所有的二手房数据
 */
new cron.CronJob('01 23 21 * * *', async () => {
    city.lianjia();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求西安二手房数据
 */
new cron.CronJob('01 50 21 * * *', async () => {
    xian.lianjia();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 合肥hf 二手房数据
 */
new cron.CronJob('01 29 21 * * *', async () => {
    city.hf();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 北京bj 二手房数据
 */
new cron.CronJob('01 33 21 * * *', async () => {
    city.bj();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 重庆cq 二手房数据
 */
new cron.CronJob('01 36 21 * * *', async () => {
    city.cq();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 福州fz 二手房数据
 */
new cron.CronJob('01 39 21 * * *', async () => {
    city.fz();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求广州  gz二手房数据
 */
new cron.CronJob('01 43 21 * * *', async () => {
    city.gz();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 太原ty 二手房数据
 */
new cron.CronJob('01 46 21 * * *', async () => {
    city.ty();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 天津tj 二手房数据
 */
new cron.CronJob('01 49 21 * * *', async () => {
    city.tj();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 昆明km 二手房数据
 */
new cron.CronJob('01 53 21 * * *', async () => {
    city.km();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 杭州 二手房数据
 */
new cron.CronJob('01 56 21 * * *', async () => {
    city.hz();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 深圳sz  二手房数据
 */
new cron.CronJob('01 59 21 * * *', async () => {
    shenzhen.lianjia();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 成都 二手房数据
 */
new cron.CronJob('01 03 21 * * *', async () => {
    city.chengdu();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 贵阳gy 二手房数据
 */
new cron.CronJob('01 06 21 * * *', async () => {
    city.gy();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 南宁 二手房数据
 */
new cron.CronJob('01 09 21 * * *', async () => {
    city.nn();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 兰州 二手房数据
 */
new cron.CronJob('01 13 21 * * *', async () => {
    city.lz();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 武汉wh 二手房数据
 */
new cron.CronJob('01 17 21 * * *', async () => {
    city.wh();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 长沙cs 二手房数据
 */
new cron.CronJob('01 19 21 * * *', async () => {
    city.cs();
}, null, true);


/**
 * 每天定时去请求数据,11:01:01 去请求 济南jn 二手房数据
 */
new cron.CronJob('01 00 21 * * *', async () => {
    city.jn();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 石家庄sjz 二手房数据
 */
new cron.CronJob('01 05 22 * * *', async () => {
    city.sjz();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 海口hk 二手房数据
 */
new cron.CronJob('01 10 22 * * *', async () => {
    city.hk();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 郑州  二手房数据
 */
new cron.CronJob('01 15 22 * * *', async () => {
    city.zz();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 哈尔滨hrb 二手房数据
 */
new cron.CronJob('01 20 22 * * *', async () => {
    city.hrb();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 长春cc 二手房数据
 */
new cron.CronJob('01 25 22 * * *', async () => {
    city.cc();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 南京nj 二手房数据
 */
new cron.CronJob('01 35 22 * * *', async () => {
    city.nj();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 南昌nc 二手房数据
 */
new cron.CronJob('01 30 22 * * *', async () => {
    city.nc();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 沈阳sy 二手房数据
 */
new cron.CronJob('01 40 22 * * *', async () => {
    city.sy();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 呼和浩特hhht 二手房数据
 */
new cron.CronJob('01 45 22 * * *', async () => {
    city.hhht();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 银川yinchuan 二手房数据
 */
new cron.CronJob('01 50 22 * * *', async () => {
    city.yinchuan();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 上海sh 二手房数据
 */
new cron.CronJob('01 44 21 * * *', async () => {
    shanghai.lianjia();
}, null, true);

