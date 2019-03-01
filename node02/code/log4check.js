/*jshint esversion: 6 */

const log4js = require('log4js');
var dateFormat = require('dateformat');

var startTime = new Date(2018, 10, 23, 9, 16, 0, 1);
var sleep = require('sleep');
for (i = 0; i < 5; i++) {
    sleep.msleep(5 + Math.floor(Math.random() * 250));
    console.log(`timestamp: ${dateFormat(new Date(), 'yyyy.mm.dd.HH.MM.ss.l')}`);
}
var endTime = new Date();
var duration = (endTime - startTime);

function timeString(dur) {
    var s = dur / 1000;
    var wrap = (i, n) => ("000000" + Math.floor(i).toString()).slice(-n);
    if (s > 3600 * 24) {
        return `${Math.floor(s/(3600*24))} days ${wrap(s/3600 % 24, 2)} hrs`;
    }
    if (s > 3600) {
        return `${wrap(s/3600,2)} hrs ${wrap((s%3600)/60, 2)} mins`;
    }
    if (s > 60) {
        return `${wrap(s/60, 2)} mins ${wrap(s%60,2)} seconds`;
    }
    return `${wrap(s%60,2)}.${wrap(dur%1000, 3)} second(s)`;
}

console.log(startTime);
console.log(endTime);
console.log(duration);
[100, 45023, 3345023, 3815013, 12500000000].forEach(dur => {
    console.log(`Duration ${dur}: ${timeString(dur)}`);
});

process.exit(0);

var log_file = `test_list_${dateFormat(new Date(), 'yyyy.mm.dd.hh.MM.ss')}.log`;
log4js.configure({
    appenders: {
        file_log: {
            type: 'file',
            filename: log_file
        },
        console_log: {
            type: "console"
        }
    },
    categories: {
        default: {
            appenders: ['file_log', 'console_log'],
            level: 'trace'
        }
    }
});

log4js.level = 2;
const log = log4js.getLogger('list API');

log.info("line 1");
log.trace("line 2");
log.debug("line 3");
log.warn("line 4");
log.error("line 5");