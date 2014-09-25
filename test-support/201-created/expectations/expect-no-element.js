/*global find,equal*/
import Ember from 'ember';

export default function(){
  Ember.Test.registerHelper('expectNoElement', function(app, selector, options, message){
    if (!options) {
      options = {};
    }

    var count = 0;

    if (!message) {
      message = "Expected to find " + count + " of " + selector;
    }

    var element = find(selector);

    equal(element.length, count, message);
  });
}
