/*global find,equal*/
import Ember from 'ember';

export default function(){
  Ember.Test.registerHelper('expectElement', function(app, selector, options, message){
    if (!options) { options = {}; }

    var count = options.count || 1;

    if (!message) { message = "Expected to find " + count + " of " + selector; }

    if (options.text) {
      selector = selector + ':contains(' + options.text + ')';
    }

    var element = find(selector);

    equal(element.length, count, message);
  });
}
