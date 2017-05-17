import Ember from 'ember';
import { module } from 'qunit';
import { test } from 'ember-qunit';
import expectComponent from '../helpers/201-created/raw/expect-component';

module('Unit - expectComponent');

test('it exists', function(assert) {
  assert.ok(expectComponent, 'it exists');
});

function makeContainer(key, value){
  return {
    lookupFactory: function(_key){
      if (key === _key) { return value; }
    }
  };
}

function makeApp(findFn, componentName, componentKlass){
  return {
    testHelpers: { find: findFn },
    __container__: makeContainer(componentName, componentKlass),
    $: Ember.$
  };
}

test('fails if the component is not in the container', function(assert) {
  var findFn = function(){};
  var DatePicker = function(){};

  var app = makeApp(findFn, 'component:date-picker', DatePicker);

  var result = expectComponent(app, assert, 'non-existent');
  assert.ok(!result.ok, 'fails');
  assert.equal(result.message, 'No component called non-existent was found in the container');
});
