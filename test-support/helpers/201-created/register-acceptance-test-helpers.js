import { registerHelper, registerAsyncHelper } from '@ember/test';

import { wrappedExpectElement,
         wrappedExpectNoElement,
         wrappedExpectComponent } from './sync';

import withinElement from './utils/within-element';
import { assert as emberAssert }  from '@ember/debug';

import { clickComponent } from './async';

export default function(assert) {
  emberAssert('`assert` must be passed to registerAcceptanceTestHelpers(). see README.md', !!assert);
  registerHelper('hasElement',   wrappedExpectElement);
  registerHelper('hasNoElement', wrappedExpectNoElement);
  registerHelper('hasComponent', wrappedExpectComponent);

  registerHelper('withinElement', withinElement);

  registerAsyncHelper('clickComponent', clickComponent);

  assert.hasElement = function () {
    return hasElement(this, ...arguments); // eslint-disable-line
  };
  assert.hasNoElement = function () {
    return hasNoElement(this, ...arguments); // eslint-disable-line
  };
  assert.hasComponent = function () {
    return hasComponent(this, ...arguments); // eslint-disable-line
  };
}
