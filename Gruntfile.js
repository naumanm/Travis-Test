'use strict';
module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    config: require('./grunt/config'),
    //invalidate_cloudfront: require('./grunt/invalidateCloudfront'),
    //browserify: require('./grunt/browserify'),
    //watch: require('./grunt/watch'),
    //clean: require('./grunt/clean'),
    jshint: require('./grunt/jshint')
/*    mockserver: require('./grunt/mockserver')(grunt),
    compass: require('./grunt/compass'),
    cssmin: require('./grunt/cssmin'),
    copy: require('./grunt/copy'),
    uglify: require('./grunt/uglify'),
    replace: require('./grunt/replace'),
    exec: require('./grunt/exec'),
    rename: require('./grunt/rename'),
    connect: require('./grunt/connect'),
    aws_s3: require('./grunt/aws_s3'),
    jasmine: require('./grunt/jasmine'),
    compress: require('./grunt/compress'),
    selenium: require('./grunt/selenium')(grunt),
    sauce_connect: require('./grunt/sauce_connect')(grunt)
  */
  });

  grunt.registerTask('test_local', ['jshint']);

//  grunt.registerTask('test_ci', ['jshint', 'browserify:specs', 'jasmine', 'integration_ci']);
//  grunt.registerTask('build_fast', ['copy', 'browserify:js', 'replace:default', 'rename']);
//  grunt.registerTask('build_full', ['clean', 'compass:build', 'build_fast']);
//  grunt.registerTask('build_optimized', ['clean', 'copy', 'browserify:optimized', 'compass:build', 'replace:default', 'rename', 'cssmin', 'uglify']);
//  grunt.registerTask('start', ['build_full', 'connect:server', 'connect:jasmine', 'watch']);
//  grunt.registerTask('test_local', ['jshint', 'browserify:specs', 'jasmine', 'integration_local']);

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