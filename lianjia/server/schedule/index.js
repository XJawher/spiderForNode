const cron = require('cron');
const city = require('../service/city');
const xian = require('../service/xian');
const shanghai = require('../service/shanghai');

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
new cron.CronJob('01 23 17 * * *', async () => {
    city.lianjia();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求西安二手房数据
 */
new cron.CronJob('01 50 16 * * *', async () => {
    xian.lianjia();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 合肥hf 二手房数据
 */
new cron.CronJob('01 29 17 * * *', async () => {
    city.hf();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 北京bj 二手房数据
 */
new cron.CronJob('01 33 17 * * *', async () => {
    city.bj();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 重庆cq 二手房数据
 */
new cron.CronJob('01 36 17 * * *', async () => {
    city.cq();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 福州fz 二手房数据
 */
new cron.CronJob('01 39 17 * * *', async () => {
    city.fz();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求广州  gz二手房数据
 */
new cron.CronJob('01 43 17 * * *', async () => {
    city.gz();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 太原ty 二手房数据
 */
new cron.CronJob('01 46 17 * * *', async () => {
    city.ty();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 天津tj 二手房数据
 */
new cron.CronJob('01 49 17 * * *', async () => {
    city.tj();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 昆明km 二手房数据
 */
new cron.CronJob('01 53 17 * * *', async () => {
    city.km();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 杭州 二手房数据
 */
new cron.CronJob('01 56 17 * * *', async () => {
    city.hz();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 深圳sz  二手房数据
 */
new cron.CronJob('01 59 17 * * *', async () => {
    city.sz();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 成都 二手房数据
 */
new cron.CronJob('01 03 16 * * *', async () => {
    city.chengdu();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 贵阳gy 二手房数据
 */
new cron.CronJob('01 06 16 * * *', async () => {
    city.gy();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 南宁 二手房数据
 */
new cron.CronJob('01 09 16 * * *', async () => {
    city.nn();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 兰州 二手房数据
 */
new cron.CronJob('01 13 16 * * *', async () => {
    city.lz();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 武汉wh 二手房数据
 */
new cron.CronJob('01 17 16 * * *', async () => {
    city.wh();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 长沙cs 二手房数据
 */
new cron.CronJob('01 19 16 * * *', async () => {
    city.cs();
}, null, true);


/**
 * 每天定时去请求数据,11:01:01 去请求 济南jn 二手房数据
 */
new cron.CronJob('01 00 17 * * *', async () => {
    city.jn();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 石家庄sjz 二手房数据
 */
new cron.CronJob('01 05 17 * * *', async () => {
    city.sjz();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 海口hk 二手房数据
 */
new cron.CronJob('01 10 17 * * *', async () => {
    city.hk();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 郑州  二手房数据
 */
new cron.CronJob('01 15 17 * * *', async () => {
    city.zz();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 哈尔滨hrb 二手房数据
 */
new cron.CronJob('01 20 17 * * *', async () => {
    city.hrb();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 长春cc 二手房数据
 */
new cron.CronJob('01 25 17 * * *', async () => {
    city.cc();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 南京nj 二手房数据
 */
new cron.CronJob('01 35 17 * * *', async () => {
    city.nj();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 南昌nc 二手房数据
 */
new cron.CronJob('01 30 17 * * *', async () => {
    city.nc();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 沈阳sy 二手房数据
 */
new cron.CronJob('01 40 17 * * *', async () => {
    city.sy();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 呼和浩特hhht 二手房数据
 */
new cron.CronJob('01 45 17 * * *', async () => {
    city.hhht();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 银川yinchuan 二手房数据
 */
new cron.CronJob('01 50 17 * * *', async () => {
    city.yinchuan();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 上海sh 二手房数据
 */
new cron.CronJob('01 55 15 * * *', async () => {
    shanghai.lianjia();
}, null, true);

