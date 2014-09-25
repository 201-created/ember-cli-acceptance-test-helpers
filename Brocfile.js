var compileES6 = require('broccoli-es6-concatenator');

var testSupport = 'test-support';
testSupport = compileES6(testSupport, {
  loaderFile: 'loader.js',
  inputFiles: ['**/*.js'],
  outputFile: 'test_support.amd.js'
});


module.exports = testSupport;
