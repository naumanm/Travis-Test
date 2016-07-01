'use strict';

var config = {
    environment: (process.env.ACAD360_ENV || 'development').toLowerCase(),
    appId: 5,
    appVersion: 0,

    mixpanelToken: process.env.MIXPANEL_TOKEN || '73c5024bd422f8d8a150b6acb920e6ca',
    googleAnalyticsToken: process.env.GOOGLE_ANALYTICS_TOKEN || 'UA-39768100-1',
    adpKey: process.env.ADP_KEY|| 'tU7GA9z9rGvcSXkLv3i2D6mG78tzb391',
    adpEndPoint: process.env.ADP_ENDPOINT || 'https://ase-stg.autodesk.com',
    adsk360EndPoint: process.env.ADSK360_ENDPOINT || 'https://accounts-staging.autodesk.com',

    consumerKey: process.env.CONSUMER_KEY || 'e353baa2-5a12-4835-a168-56cb099b94a9',
    appContext: (process.env.APP_CONTEXT || ( process.env.ACAD360_ENV === 'production' ? 'production' : 'staging')),

    SAUCE_ACCESSKEY: process.env.SAUCE_ACCESSKEY || 'd0ee43ca-b952-4646-8c44-e40dba9de653',
    SAUCE_USERNAME: process.env.SAUCE_USERNAME || 'acadsf',
    SAUCE_TUNNELIDENTIFIER: process.env.SAUCE_TUNNELIDENTIFIER || process.env.USER,

    marketingURL: 'https://autocad360-com-staging.visualtao.net/'
};

if (config.environment === 'staging') {
    config.server = 'https://cdn.web-platform.io/editor/release/v5.4.1';
    config.adpURL = "https://ase-stg.autodesk.com/adp/v0.0.2/js/adp-web-analytics-sdk.min.js";
} else if (config.environment === 'production') {
    config.marketingURL = 'https://www.autocad360.com';
    config.server = 'https://cdn.web-platform.io/editor/release/v5.4.1';
    config.adpURL = "https://ase-cdn.autodesk.com/adp/v0.0.2/js/adp-web-analytics-sdk.min.js";
} else if (config.environment === 'edge') {
    config.server = 'https://cdn.web-platform.io/editor/edge';
    config.adpURL = "https://ase-stg.autodesk.com/adp/v0.0.2/js/adp-web-analytics-sdk.min.js";
} else {
    //config.server = 'http://localhost:3600';
    config.server = 'https://cdn.web-platform.io/editor/release/v5.4.1';
    config.adpURL = "https://ase-stg.autodesk.com/adp/v0.0.2/js/adp-web-analytics-sdk.min.js";
}

module.exports = config;
