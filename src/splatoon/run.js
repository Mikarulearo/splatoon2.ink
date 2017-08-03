const CronJob = require('cron').CronJob;
const splatnet = require('./splatnet');

console.info('Starting periodic tasks...');

// Run every day at 2min 30sec after the hour
new CronJob('02 24 * * * *', () => {
    splatnet.update();
}, null, true);