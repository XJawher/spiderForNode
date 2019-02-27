const cron = require('cron');


new cron.CronJob('*/15 * * * * *', async () => {
    await task.getNodeThroughputAndIops();
}, null, true);
