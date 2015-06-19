/* jshint node: true */
'use strict';

module.exports = {
  included: function(app) {
    app.import('bower_components/lodash/lodash.js');
  },

  name: 'ember-cli-acceptance-test-helpers'
};
