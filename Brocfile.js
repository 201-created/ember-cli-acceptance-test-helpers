var compileES6 = require('broccoli-es6-concatenator');
var pickFiles  = require('broccoli-static-compiler');
var mergeTrees = require('broccoli-merge-trees');

var loader = pickFiles('bower_components', {
  srcDir: 'loader',
  files: ['loader.js'],
  destDir: 'loader'
});

var testSupport = mergeTrees([loader, 'test-support']);
var testJs = pickFiles('tests', {
  srcDir: '/unit',
  files: ['**.*'],
  destDir: '/tests'
});
var testSupportAndTests = mergeTrees([testSupport, testJs]);

testSupport = compileES6(testSupportAndTests, {
  loaderFile: 'loader/loader.js',
  inputFiles: ['**/*.js'],
  ignoredModules: ['ember'],
  outputFile: '/js/test_support.amd.js'
});

var qUnit = pickFiles('bower_components', {
  srcDir: 'qunit/qunit',
  files: ['qunit.css', 'qunit.js'],
  destDir: '/assets/qunit'
});

var ember = pickFiles('bower_components', {
  srcDir: 'ember',
  files: ['ember.js'],
  destDir: '/assets/ember'
});

var jQuery = pickFiles('bower_components', {
  srcDir: 'jquery/dist',
  files: ['jquery.js'],
  destDir: '/assets/jquery'
});

var testLoader = pickFiles('bower_components', {
  srcDir: 'ember-cli-test-loader',
  files: ['test-loader.js'],
  destDir: '/assets'
});

var testIndex = pickFiles('tests', {
  srcDir: '/',
  files: ['index.html'],
  destDir: '/tests'
});

var assets = mergeTrees([testLoader,
                        testIndex,
                        qUnit,
                        jQuery,
                        ember]);


module.exports = mergeTrees([testSupport, assets]);
