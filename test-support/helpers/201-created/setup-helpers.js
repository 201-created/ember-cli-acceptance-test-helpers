import Ember from 'ember';

import expectElement from   './expect-element';
import expectNoElement from './expect-no-element';
import expectComponent from './expect-component';
import expectView from      './expect-view';

import clickComponent from './click-component';

export default function(){
  Ember.Test.registerHelper('expectElement',   expectElement);
  Ember.Test.registerHelper('expectNoElement', expectNoElement);
  Ember.Test.registerHelper('expectComponent', expectComponent);
  Ember.Test.registerHelper('expectView',      expectView);

  Ember.Test.registerAsyncHelper('clickComponent', clickComponent);
}
