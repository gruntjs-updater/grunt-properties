/*
 * grunt-properties
 * https://github.com/nortal/grunt-properties
 *
 * Copyright (c) 2014 Anton Stalnuhhin
 * Licensed under the Apache License.
 */
'use strict';
module.exports = function (grunt) {
  var pParser = require('properties-parser');
  grunt.registerMultiTask('properties', 'Convert java .properties files to javascript', function () {
    function convert(filepath) {
      var properties = pParser.parse(grunt.file.read(filepath)), result = '';
      for (var code in properties) {
        if (result.length > 0) {
          result += ',\n';
        }
        result += '"' + code + '": "' + properties[code] + '"';
      }
      return result;
    }

    var options = this.options({
        before: 'window.MESSAGES = ',
        after: ';'
      }),
      src = options.before + '{\n';

    this.files.forEach(function (file) {
      src += file.src.filter(function (filepath) {
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('.properties file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(convert).join(',\n');

      src += '\n}' + options.after;

      grunt.file.write(file.dest, src);
      grunt.log.writeln('File "' + file.dest + '" created.');
    });
  });
};