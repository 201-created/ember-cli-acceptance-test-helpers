import Ember from 'ember';

import { expectElement,
         expectNoElement,
         expectComponent,
         expectView } from './sync';

import { clickComponent } from './async';

export default function(){
  Ember.Test.registerHelper('expectElement',   expectElement);
  Ember.Test.registerHelper('expectNoElement', expectNoElement);
  Ember.Test.registerHelper('expectComponent', expectComponent);
  Ember.Test.registerHelper('expectView',      expectView);

  Ember.Test.registerAsyncHelper('clickComponent', clickComponent);
}
