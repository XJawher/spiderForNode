const cron = require('cron');
const city = require('../service/city');
const xian = require('../service/xian');

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
new cron.CronJob('01 10 11 * * *', async () => {
    city.lianjia();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求西安二手房数据
 */
new cron.CronJob('01 42 11 * * *', async () => {
    city.xian();
}, null, true);

/**
 * 每天定时去请求数据,11:01:01 去请求成都二手房数据
 */
new cron.CronJob('01 45 11 * * *', async () => {
    city.chengdu();
}, null, true);