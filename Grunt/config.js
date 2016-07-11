'use strict';

var config = {
    environment: (process.env.ACAD360_ENV || 'development').toLowerCase(),
    appId: 5,
    appVersion: 0
};

module.exports = config;
