'use strict';
module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: require('./Grunt/jshint'),
    aws_s3: require('./Grunt/aws_s3'),
    aws_s3_release_path: 'release',
    aws_s3_edge_path: 'edge',
    versionPath: '/<%= pkg.version %>'
  });

  grunt.registerTask('test', ['jshint']);

  grunt.registerTask('build', function() {
    grunt.task.run(['revision', 'replace:base', 'compress', 'aws_s3:default']);
  });

  grunt.registerTask('deploy-release', function() {
    grunt.config.merge({
      config: {
        aws_s3_path: 'release',
        versionPath: '/<%= pkg.version %>'
      }
    });
    grunt.task.run(['aws_s3:default']);
  });

  grunt.registerTask('create-folders', function () {
    grunt.file.mkdir('<%= process.env["aws_bucket"] %>' + '/' + config.aws_s3_release_path + '/' + config.versionPath);
  });

};