"use strict";

module.exports = {
  name: 'ember-test-helpers',
  treeFor: function(name){
    console.log('tree for',name);
  },
  included: function(app){
    console.log('app',app);
    console.log('included...');
  }
};
