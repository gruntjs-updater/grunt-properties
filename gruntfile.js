/*
 * grunt-properties
 * https://github.com/nortal/grunt-properties
 *
 * Copyright (c) 2014 Anton Stalnuhhin
 * Licensed under the Apache License.
 */
'use strict';
module.exports = function (grunt) {
  grunt.initConfig({
    jshint: {
      all: ['gruntfile.js', 'tasks/*.js', '<%= nodeunit.tests %>'],
      options: {jshintrc: '.jshintrc'}
    },
    clean: {tests: ['tmp']},
    properties: {
      en: {files: {'tmp/test_en.js': ['test/fixtures/module1_en.properties', 'test/fixtures/module2_en.properties']}},
      ge: {files: {'tmp/test_ge.js': ['test/fixtures/module1_ge.properties']}}
    },
    nodeunit: {
      tests: ['test/*_test.js']
    }
  });

  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.registerTask('test', ['clean', 'properties', 'nodeunit']);
  grunt.registerTask('default', ['jshint', 'test']);
};
