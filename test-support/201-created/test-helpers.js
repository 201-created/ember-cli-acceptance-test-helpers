import Ember from 'ember';
import expectElement from './test-helpers/expect-element';
import expectNoElement from './test-helpers/expect-no-element';
import expectComponent from './test-helpers/expect-component';
import expectView from './test-helpers/expect-view';

import clickComponent from './test-helpers/click-component';

export default function(){
  Ember.Test.registerHelper('expectElement', expectElement);
  Ember.Test.registerHelper('expectNoElement', expectNoElement);
  Ember.Test.registerHelper('expectComponent', expectComponent);
  Ember.Test.registerHelper('expectView', expectView);

  Ember.Test.registerAsyncHelper('clickComponent', clickComponent);
}
