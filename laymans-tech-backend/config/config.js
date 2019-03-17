'use strict';

var config;

if (process.env.NODE_ENV) {
    config = require('./environments/' + process.env.NODE_ENV);
} else {
    config = require('./environments/dev');
}


module.exports.env_config = config;
