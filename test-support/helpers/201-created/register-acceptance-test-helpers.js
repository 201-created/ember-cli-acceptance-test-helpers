import Ember from 'ember';

import { wrappedExpectElement,
         wrappedExpectNoElement,
         wrappedExpectComponent } from './sync';

import withinElement from './utils/within-element';

import { clickComponent } from './async';

export default function(){
  Ember.Test.registerHelper('expectElement',   wrappedExpectElement);
  Ember.Test.registerHelper('expectNoElement', wrappedExpectNoElement);
  Ember.Test.registerHelper('expectComponent', wrappedExpectComponent);

  Ember.Test.registerHelper('withinElement', withinElement);

  Ember.Test.registerAsyncHelper('clickComponent', clickComponent);
}
