import {getContext} from '../utils/helper-context';
import expectElement from './expect-element';
import Ember from 'ember';

export default function(app, selector, options, message){
  Ember.Logger.warn('expectNoElement() is incompatible with QUnit 2.0. Upgrade to ember-cli-acceptance-test-helpers >= 1.0 and replace with assert.hasNoElement()');
  if (!options) {
    options = {};
  }

  return expectElement(app, selector, 0, options);
}
