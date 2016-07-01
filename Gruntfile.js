'use strict';
module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    config: require('./grunt/config'),
    jshint: require('./grunt/jshint')
  });

  grunt.registerTask('test_local', ['jshint']);

  grunt.registerTask('deploy-edge', function() {
    grunt.config.merge({
      config: {
        aws_s3_path: 'edge',
        versionPath: '/<%= pkg.version %>.<%= meta.revision %>'
      }
    });
    grunt.task.run(['revision', 'replace:base', 'compress', 'aws_s3:default', 'aws_s3:rootHTML']);
  });

  grunt.registerTask('deploy-release', function() {
    grunt.config.merge({
      config: {
        aws_s3_path: 'release',
        versionPath: '/<%= pkg.version %>'
      }
    });
    grunt.task.run(['revision', 'replace:base', 'compress', 'aws_s3:default']);
  });
};