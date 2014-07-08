# grunt-properties [![Build Status](https://secure.travis-ci.org/nortal/grunt-properties.png?branch=master)](http://travis-ci.org/nortal/grunt-properties)

Converts java [.properties](http://en.wikipedia.org/wiki/.properties) files to javascript object. Usage example: configurations, translation files.


## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install nortal-grunt-properties --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('nortal-grunt-properties');
```

## The "properties" task

### Overview
In your project's Gruntfile, add a section named `properties` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  properties: {
    english: {
      files: {
        'tmp/test_en.js': ['test/fixtures/module1_en.properties', 'test/fixtures/module2_en.properties']
      }
    }
    german: {
      // before and after the generated object
      options: {
        before: 'define("german_texts", [], function(){ return ',
        after: '; });'
      },
      files: {
        'tmp/test_ge.js': ['test/fixtures/module1_ge.properties']
      }
    }
  }
})
```

### Options

#### options.before
Type: `String`
Default value: `'window.MESSAGES = '`

Text before the generated object.

#### options.after
Type: `String`
Default value: `';'`

Text after the generated object.

### Usage Examples

#### Default before and after
```js
grunt.initConfig({
  properties: {
    files: {
      'tmp/test_ge.js': ['test/fixtures/module1_ge.properties'],
    },
  },
})
```

#### Customized before and after (AMD)
```js
grunt.initConfig({
  properties: {
    german: {
      options: {
        before: 'define("german_texts", [], function(){ return ',
        after: '; });'
      },
      files: {
        'tmp/test_ge.js': ['test/fixtures/module1_ge.properties']
      }
    }
  }
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
  * 2014-07-08   v0.2.0   Initial release. (NORTAL)
  * 2013-05-22   v0.1.0   Initial release. (heldr)

## Credits
* GitHub [heldr/grunt-properties](https://github.com/heldr/grunt-properties)
* [node-properties-parser](https://github.com/xavi-/node-properties-parser)
* The awesome project [props2js](https://github.com/nzakas/props2js).
