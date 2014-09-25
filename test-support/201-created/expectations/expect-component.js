/* global ok */
import Ember from 'ember';
import {lookupComponent} from '../utils/lookup';
import eachView from '../utils/each-view';

var K = function(){};

export default function(){
  Ember.Test.registerHelper('expectComponent', function(app, expectation, callbackFn, message){
    var Component = lookupComponent(app, expectation);

    if (!Component) {
      ok(false, 'No Component called ' + expectation + ' exists.');
      return;
    }

    if (!message) {
      message = 'Expected to find component: ' + expectation;
    }

    if (!callbackFn) { callbackFn = K; }

    var found = 0;

    eachView(app, function(view){
      if (Component.detectInstance(view)) {
        found++;
        callbackFn(view, found);
      }
    });

    ok(found > 0, message);
  });
}
