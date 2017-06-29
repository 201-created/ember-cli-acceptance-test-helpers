import Ember from 'ember';

import { wrappedExpectElement,
         wrappedExpectNoElement,
         wrappedExpectComponent } from './sync';

import withinElement from './utils/within-element';

import { clickComponent } from './async';

export default function(assert) {
  Ember.Test.registerHelper('expectElement',   wrappedExpectElement);
  Ember.Test.registerHelper('expectNoElement', wrappedExpectNoElement);
  Ember.Test.registerHelper('expectComponent', wrappedExpectComponent);

  Ember.Test.registerHelper('withinElement', withinElement);

  Ember.Test.registerAsyncHelper('clickComponent', clickComponent);

  assert.hasElement = function () {
    return expectElement(this, ...arguments);
  };
  assert.hasNoElement = function () {
    return expectNoElement(this, ...arguments);
  };
  assert.hasComponent = function () {
    return expectComponent(this, ...arguments);
  };
}
