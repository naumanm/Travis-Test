'use strict';

module.exports = {
  default: {
    src: ['dist/**/*.html', 'dist/**/*.js'],
    overwrite: true,
    replacements: [
      {
        from: '//PLATFORM_URL/',
        to: '<%= config.server %>/'
      },
      {
        from: 'APP_CONTEXT',
        to: '<%= config.appContext %>'
      },
      {
        from: 'APP_ID',
        to: '<%= config.appId %>'
      },
      {
        from: 'APP_VERSION',
        to: '<%= config.appVersion %>'
      },
      {
        from: 'CLIENT_ENV',
        to: '<%= config.environment %>'
      },
      {
        from: /('|")use strict('|");/img,
        to: ''
      }
    ]
  },
  base: {
    src: ['dist/**/*.html'],
    overwrite: true,
    replacements: [{
      from: '<base href="/">',
      to: '<base href="<%= config.versionPath %>/">'
    }]
  }
};