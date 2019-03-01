/*jshint esversion: 6 */

const winston = require('winston');

const logger = winston.createLogger({
            transports: [
                new winston.transports.Console({
                    timestamp: function () {
                        return Date.now();
                    },
                    formatter: function (options) {
                        console.log("formatting to console");
                        // Return string will be passed to logger.
                        return options.timestamp() + ' ' + options.level.toUpperCase() + ' ' + (options.message ? options.message : '') + (options.meta && Object.keys(options.meta).length ? '\n\t' + JSON.stringify(options.meta) : '');
                    }}),
                new winston.transports.File({
                    filename: 'combined.log',
                    timestamp: function () {
                        return Date.now();
                    },
                    formatter: function (options) {
                        // Return string will be passed to logger.
                        return options.timestamp() + ' ' + options.level.toUpperCase() + ' ' + (options.message ? options.message : '') + (options.meta && Object.keys(options.meta).length ? '\n\t' + JSON.stringify(options.meta) : '');
                    }})]
            });

        logger.info("line 1");
        //logger.trace("line 2");
        logger.debug("line 3"); logger.warn("line 4"); logger.error("line 5");