/*global find,equal*/
import Ember from 'ember';

export default function(){
  Ember.Test.registerHelper('expectElement', function(app, selector){
    var element = find(selector);

    equal(element.length, 1, 'found: ' + selector);
  });
}
