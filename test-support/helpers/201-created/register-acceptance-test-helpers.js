import Ember from 'ember';

import { wrappedExpectElement,
         wrappedExpectNoElement,
         wrappedExpectComponent } from './sync';

import withinElement from './utils/within-element';

import { clickComponent } from './async';

export default function(assert) {
  Ember.Test.registerHelper('hasElement',   wrappedExpectElement);
  Ember.Test.registerHelper('hasNoElement', wrappedExpectNoElement);
  Ember.Test.registerHelper('hasComponent', wrappedExpectComponent);

  Ember.Test.registerHelper('withinElement', withinElement);

  Ember.Test.registerAsyncHelper('clickComponent', clickComponent);

  assert.hasElement = function () {
    return hasElement(this, ...arguments);
  };
  assert.hasNoElement = function () {
    return hasNoElement(this, ...arguments);
  };
  assert.hasComponent = function () {
    return hasComponent(this, ...arguments);
  };
}
