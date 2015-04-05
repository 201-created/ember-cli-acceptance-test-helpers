import Ember from 'ember';
import startApp from '../helpers/start-app';
import expectComponent from '../helpers/201-created/raw/expect-component';

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
    ok(result.ok, "expected a pass");
  });
});

test('expectComponent fails when component is not present', function(assert) {
  visit('/');

  andThen(function() {
    var result = expectComponent(App, 'another-component');
    ok(!result.ok, "expected a failure");
  });
});

test('expectComponent error message says component not found when component is not present', function(assert) {
  visit('/');

  andThen(function() {
    var result = expectComponent(App, 'another-component');
    assert.ok(result.message.indexOf('another-component') > -1, 'expected message to contain component name');
    assert.ok(result.message.indexOf('Expected to find component') > -1);
  });
});

test('expectComponent fails when component is present twice with count of 1', function(assert) {
  visit('/two-components');

  andThen(function() {
    var result = expectComponent(App, 'simple-component', 1);
    ok(!result.ok, "expected a failure");
  });
});

test('expectComponent passes when component is present twice with count of 2', function(assert) {
  visit('/two-components');

  andThen(function() {
    var result = expectComponent(App, 'simple-component', 2);
    ok(result.ok, "expected a pass");
  });
});

test('expectComponent fails when component is present twice with count of 3', function(assert) {
  visit('/two-components');

  andThen(function() {
    var result = expectComponent(App, 'simple-component', 3);
    ok(!result.ok, "expected a failure");
  });
});

test('expectComponent passes when component is present twice but count unspecified', function(assert) {
  visit('/two-components');

  andThen(function() {
    var result = expectComponent(App, 'simple-component');
    ok(result.ok, "expected a pass");
  });
});

test('expectComponent passes when component is present twice and count null', function(assert) {
  visit('/two-components');

  andThen(function() {
    var result = expectComponent(App, 'simple-component', null);
    ok(result.ok, "expected a pass");
  });
});

test('expectComponent passes when component is present inside a compound component', function(assert) {
  visit('/compound-component');

  andThen(function() {
    var result = expectComponent(App, 'simple-component');
    ok(result.ok, "expected a pass");
  });
});

test('expectComponent passes when component is present inside a nested route', function(assert) {
  visit('/compound-route-outer/compound-route-inner');

  andThen(function() {
    var result = expectComponent(App, 'simple-component');
    ok(result.ok, "expected a pass");
  });
});

test('expectComponent passes when component is present and text matches contains option', function(assert) {
  visit('/contains');

  andThen(function() {
    var result = expectComponent(App, 'simple-component', null, {contains: 'text is present'});
    ok(result.ok, "expected a pass");
  });
});

test('expectComponent passes when component is present and text does not match contains option', function(assert) {
  visit('/contains');

  andThen(function() {
    var result = expectComponent(App, 'simple-component', null, {contains: 'penguins are present'});
    ok(!result.ok, "expected a failure");
  });
});

test('expectComponent gives component missing error when component is not present contains option provided', function(assert) {
  visit('/contains');

  andThen(function() {
    var result = expectComponent(App, 'another-component', null, {contains: 'penguins are present'});
    assert.ok(result.message.indexOf('Expected to find component') > -1, 'Should get \'Expected to find component\' message');
  });
});

// 'fails is the component is found but destroyed'
