import Ember from 'ember';

import { expectElement,
         expectNoElement,
         expectComponent } from './sync';

import withinElement from './utils/within-element';

import { clickComponent } from './async';

export default function(){
  Ember.Test.registerHelper('expectElement',   expectElement);
  Ember.Test.registerHelper('expectNoElement', expectNoElement);
  Ember.Test.registerHelper('expectComponent', expectComponent);

  Ember.Test.registerHelper('withinElement', withinElement);

  Ember.Test.registerAsyncHelper('clickComponent', clickComponent);
}
