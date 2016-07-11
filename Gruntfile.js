'use strict';
module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    config: require('./Grunt/config'),
    jshint: require('./Grunt/jshint')
  });

  grunt.registerTask('test', ['jshint']);

};