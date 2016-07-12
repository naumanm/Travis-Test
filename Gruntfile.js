'use strict';
module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: require('./grunt/jshint'),
    aws_s3: require('./grunt/aws_s3'),
    replace: require('./grunt/replace')
  });

  grunt.registerTask('test', ['jshint']);

  grunt.registerTask('build', function() {
    grunt.task.run(['revision', 'replace:base', 'compress']);
  });

  grunt.registerTask('deploy-release', function() {
    grunt.config.merge({
      config: {
        aws_s3_path: 'release',
        versionPath: '/<%= pkg.version %>'
      }
    });
    grunt.task.run(['replace:base', 'aws_s3:default', 'aws_s3:rootHTML']);
  });

};