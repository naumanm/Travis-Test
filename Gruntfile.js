'use strict';
module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: require('./Grunt/jshint'),
    aws_s3: require('./grunt/aws_s3')
  });

  grunt.registerTask('test', ['jshint']);

  grunt.registerTask('build', function() {

    grunt.task.run(['revision', 'replace:base', 'compress', 'aws_s3:default']);

  });

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
    grunt.task.run(['aws_s3:default'], ['aws_s3:rootHTML']);
  });

};