import Ember from 'ember';
import startApp from '../helpers/start-app';
import expectComponent from '../helpers/201-created/raw/expect-component';
import { module } from 'qunit';
import { test } from 'ember-qunit';

var App;

module('Acceptance: ExpectComponent', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('expectComponent passes when component is present', function(assert) {
  visit('/');

  andThen(function() {
    var result = expectComponent(App, 'simple-component');
    assert.ok(result.ok, "expected a pass");
  });
});

test('expectComponent fails when component is not present', function(assert) {
  visit('/');

  andThen(function() {
    var result = expectComponent(App, 'another-component');
    assert.ok(!result.ok, "expected a failure");
  });
});

test('expectComponent error message says component not found when component is not present with no count', function(assert) {
  visit('/');

  andThen(function() {
    var result = expectComponent(App, 'another-component');
    assert.ok(result.message.indexOf('another-component') > -1, 'expected message to contain component name');
    assert.ok(result.message.indexOf('Expected to find at least one component') > -1);
  });
});

test('expectComponent fails when component is present twice with count of 1', function(assert) {
  visit('/two-components');

  andThen(function() {
    var result = expectComponent(App, 'simple-component', 1);
    assert.ok(!result.ok, "expected a failure");
  });
});

test('expectComponent error message gives count and found when component is present twice with count of 1', function(assert) {
  visit('/two-components');

  andThen(function() {
    var result = expectComponent(App, 'simple-component', 1);
    assert.ok(result.message.indexOf('simple-component') > -1, 'expected message to contain component name');
    assert.ok(result.message.indexOf('Expected to find 1 components') > -1, 'expected message to contain "Expected to find 1 components"');
    var suffix = 'Found: 2';
    assert.ok(result.message.indexOf(suffix, result.message.length - suffix.length) > -1, 'expected message to end with '+suffix);
  });
});

test('expectComponent passes when component is present twice with count of 2', function(assert) {
  visit('/two-components');

  andThen(function() {
    var result = expectComponent(App, 'simple-component', 2);
    assert.ok(result.ok, "expected a pass");
  });
});

test('expectComponent fails when component is present twice with count of 3', function(assert) {
  visit('/two-components');

  andThen(function() {
    var result = expectComponent(App, 'simple-component', 3);
    assert.ok(!result.ok, "expected a failure");
  });
});

test('expectComponent passes when component is present twice but count unspecified', function(assert) {
  visit('/two-components');

  andThen(function() {
    var result = expectComponent(App, 'simple-component');
    assert.ok(result.ok, "expected a pass");
  });
});

test('expectComponent passes when component is present twice and count null', function(assert) {
  visit('/two-components');

  andThen(function() {
    var result = expectComponent(App, 'simple-component', null);
    assert.ok(result.ok, "expected a pass");
  });
});

test('expectComponent passes when component is present inside a compound component', function(assert) {
  visit('/compound-component');

  andThen(function() {
    var result = expectComponent(App, 'simple-component');
    assert.ok(result.ok, "expected a pass");
  });
});

test('expectComponent passes when component is present inside a nested route', function(assert) {
  visit('/compound-route-outer/compound-route-inner');

  andThen(function() {
    var result = expectComponent(App, 'simple-component');
    assert.ok(result.ok, "expected a pass");
  });
});

test('expectComponent passes when component is present and text matches contains option', function(assert) {
  visit('/contains');

  andThen(function() {
    var result = expectComponent(App, 'simple-component', null, {contains: 'text is present'});
    assert.ok(result.ok, "expected a pass");
  });
});

test('expectComponent passes when component is present and text does not match contains option', function(assert) {
  visit('/contains');

  andThen(function() {
    var result = expectComponent(App, 'simple-component', null, {contains: 'penguins are present'});
    assert.ok(!result.ok, "expected a failure");
  });
});

test('expectComponent gives component missing error when component is not present with contains option provided', function(assert) {
  visit('/contains');

  andThen(function() {
    var result = expectComponent(App, 'another-component', null, {contains: 'penguins are present'});
    assert.ok(result.message.indexOf('Expected to find at least one component') > -1, 'Should get \'Expected to find component\' message');
  });
});

// 'fails is the component is found but destroyed'
