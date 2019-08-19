const cron = require('cron');
const city = require('../service/city');
const restructureCity = require('../restructure/city');
// const shenzhen = require('../service/shenzhen');

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
 * 优化数据结构, 全局的数据可以忽略
 */
new cron.CronJob('01 23 14 * * 0', async () => {
    city.lianjia();
}, null, true);

/**
 * 周四定时请求西安数据,新增加了新上数据字段,
 * 更新了全局的数据结构
 *
 */
new cron.CronJob('01 50 14 * * 0', async () => {
    restructureCity.xian();
}, null, true);

/*
 * 周四定时请求 合肥hf 数据,新增加了新上数据字段,
 * 更新了全局的数据结构
 */
new cron.CronJob('01 29 14 * * 0', async () => {
    restructureCity.hf();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 北京bj 二手房数据
 */
new cron.CronJob('01 33 14 * * 0', async () => {
    restructureCity.bj();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 重庆cq 二手房数据
 */
new cron.CronJob('01 36 14 * * 0', async () => {
    restructureCity.cq();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 福州fz 二手房数据
 */
new cron.CronJob('01 39 14 * * 0', async () => {
    restructureCity.fz();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求广州  gz二手房数据
 */
new cron.CronJob('01 43 14 * * 0', async () => {
    restructureCity.gz();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 太原ty 二手房数据
 */
new cron.CronJob('01 46 14 * * 0', async () => {
    restructureCity.ty();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 天津tj 二手房数据
 */
new cron.CronJob('01 49 14 * * 0', async () => {
    restructureCity.tj();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 昆明km 二手房数据
 */
new cron.CronJob('01 53 14 * * 0', async () => {
    restructureCity.km();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 杭州 二手房数据
 */
new cron.CronJob('01 56 14 * * 0', async () => {
    restructureCity.hz();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 深圳sz  二手房数据
 */
new cron.CronJob('01 17 14 * * 0', async () => {
    restructureCity.shenzhen();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 成都 二手房数据
 */
new cron.CronJob('01 03 14 * * 0', async () => {
    restructureCity.cd();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 贵阳gy 二手房数据
 */
new cron.CronJob('01 06 14 * * 0', async () => {
    restructureCity.gy();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 南宁 二手房数据
 */
new cron.CronJob('01 09 14 * * 0', async () => {
    restructureCity.nn();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 兰州 二手房数据
 */
new cron.CronJob('01 13 14 * * 0', async () => {
    restructureCity.lz();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 武汉wh 二手房数据
 */
new cron.CronJob('01 17 14 * * 0', async () => {
    restructureCity.wh();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 长沙cs 二手房数据
 */
new cron.CronJob('01 19 14 * * 0', async () => {
    restructureCity.cs();
}, null, true);


/**
 * 每天定时去请求数据,11:01:01 去请求 济南jn 二手房数据
 */
new cron.CronJob('01 00 14 * * 0', async () => {
    restructureCity.jn();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 石家庄sjz 二手房数据
 */
new cron.CronJob('01 05 14 * * 0', async () => {
    restructureCity.sjz();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 海口hk 二手房数据
 */
new cron.CronJob('01 10 14 * * 0', async () => {
    restructureCity.hk();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 郑州  二手房数据
 */
new cron.CronJob('01 15 14 * * 0', async () => {
    restructureCity.zz();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 哈尔滨hrb 二手房数据
 */
new cron.CronJob('01 20 14 * * 0', async () => {
    restructureCity.hrb();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 长春cc 二手房数据
 */
new cron.CronJob('01 25 14 * * 0', async () => {
    restructureCity.cc();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 南京nj 二手房数据
 */
new cron.CronJob('01 35 14 * * 0', async () => {
    restructureCity.nj();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 南昌nc 二手房数据
 */
new cron.CronJob('01 30 14 * * 0', async () => {
    restructureCity.nc();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 沈阳sy 二手房数据
 */
new cron.CronJob('01 40 14 * * 0', async () => {
    restructureCity.sy();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 呼和浩特hhht 二手房数据
 */
new cron.CronJob('01 45 14 * * 0', async () => {
    restructureCity.hhht();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 银川yinchuan 二手房数据
 */
new cron.CronJob('01 50 14 * * 0', async () => {
    restructureCity.yinchuan();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求 上海sh 二手房数据
 */
new cron.CronJob('01 44 14 * * 0', async () => {
    restructureCity.sh();
}, null, true);

