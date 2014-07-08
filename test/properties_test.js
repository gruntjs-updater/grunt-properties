'use strict';
var grunt = require('grunt');

// help notes on tests: https://github.com/caolan/nodeunit
exports.properties = {
  setUp: function(done) {
    done();
  },
  page_config: function(test) {
    test.expect(1);
    var actual = grunt.file.read('tmp/test_en.js');
    var expected = grunt.file.read('test/expected/test_en.js');
    test.equal(actual, expected, 'Should be the same.');
    test.done();
  },
  page_color_config: function(test) {
    test.expect(1);
    var actual = grunt.file.read('tmp/test_ge.js');
    var expected = grunt.file.read('test/expected/test_ge.js');
    test.equal(actual, expected, 'Should be the same.');
    test.done();
  }
};
