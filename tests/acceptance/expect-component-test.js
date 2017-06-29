import { test } from 'qunit';
import moduleForAcceptance from '../helpers/module-for-acceptance';
import hasComponentRaw from '../helpers/201-created/raw/expect-component';

moduleForAcceptance('Acceptance | ExpectComponent');

test('hasComponent passes when component is present', function(assert) {
  visit('/');

  andThen(() => {
    var result = hasComponentRaw(this.application, assert, 'simple-component');
    assert.ok(result.ok, 'expected a pass');
  });
});

test('hasComponent fails when component is not present', function(assert) {
  visit('/');

  andThen(() => {
    let result = hasComponentRaw(this.application, assert, 'another-component');
    assert.ok(!result.ok, 'expected a failure');
  });
});

test('hasComponent error message says component not found when component is not present with no count', function(assert) {
  visit('/');

  andThen(() => {
    var result = hasComponentRaw(this.application, assert, 'another-component');
    assert.ok(result.message.indexOf('another-component') > -1, 'expected message to contain component name');
    assert.ok(result.message.indexOf('Expected to find at least one component') > -1);
  });
});

test('hasComponent fails when component is present twice with count of 1', function(assert) {
  visit('/two-components');

  andThen(() => {
    var result = hasComponentRaw(this.application, assert, 'simple-component', 1);
    assert.ok(!result.ok, "expected a failure");
  });
});

test('hasComponent error message gives count and found when component is present twice with count of 1', function(assert) {
  visit('/two-components');

  andThen(() => {
    var result = hasComponentRaw(this.application, assert, 'simple-component', 1);
    assert.ok(result.message.indexOf('simple-component') > -1, 'expected message to contain component name');
    assert.ok(result.message.indexOf('Expected to find 1 components') > -1, 'expected message to contain "Expected to find 1 components"');
    var suffix = 'Found: 2';
    assert.ok(result.message.indexOf(suffix, result.message.length - suffix.length) > -1, 'expected message to end with '+suffix);
  });
});

test('hasComponent passes when component is present twice with count of 2', function(assert) {
  visit('/two-components');

  andThen(() => {
    var result = hasComponentRaw(this.application, assert, 'simple-component', 2);
    assert.ok(result.ok, "expected a pass");
  });
});

test('hasComponent fails when component is present twice with count of 3', function(assert) {
  visit('/two-components');

  andThen(() => {
    var result = hasComponentRaw(this.application, assert, 'simple-component', 3);
    assert.ok(!result.ok, "expected a failure");
  });
});

test('hasComponent passes when component is present twice but count unspecified', function(assert) {
  visit('/two-components');

  andThen(() => {
    var result = hasComponentRaw(this.application, assert, 'simple-component');
    assert.ok(result.ok, "expected a pass");
  });
});

test('hasComponent passes when component is present twice and count null', function(assert) {
  visit('/two-components');

  andThen(() => {
    var result = hasComponentRaw(this.application, assert, 'simple-component', null);
    assert.ok(result.ok, "expected a pass");
  });
});

test('hasComponent passes when component is present inside a compound component', function(assert) {
  visit('/compound-component');

  andThen(() => {
    var result = hasComponentRaw(this.application, assert, 'simple-component');
    assert.ok(result.ok, "expected a pass");
  });
});

test('hasComponent passes when component is present inside a nested route', function(assert) {
  visit('/compound-route-outer/compound-route-inner');

  andThen(() => {
    var result = hasComponentRaw(this.application, assert, 'simple-component');
    assert.ok(result.ok, "expected a pass");
  });
});

test('hasComponent passes when component is present and text matches contains option', function(assert) {
  visit('/contains');

  andThen(() => {
    var result = hasComponentRaw(this.application, assert, 'simple-component', null, {contains: 'text is present'});
    assert.ok(result.ok, "expected a pass");
  });
});

test('hasComponent passes when component is present and text does not match contains option', function(assert) {
  visit('/contains');

  andThen(() => {
    var result = hasComponentRaw(this.application, assert, 'simple-component', null, {contains: 'penguins are present'});
    assert.ok(!result.ok, "expected a failure");
  });
});

test('hasComponent gives component missing error when component is not present with contains option provided', function(assert) {
  visit('/contains');

  andThen(() => {
    var result = hasComponentRaw(this.application, assert, 'another-component', null, {contains: 'penguins are present'});
    assert.ok(result.message.indexOf('Expected to find at least one component') > -1, 'Should get \'Expected to find component\' message');
  });
});

test('hasComponent supports expecting zero component instances', function(assert) {
  visit('/');

  andThen(() => {
    var result = hasComponentRaw(this.application, assert, 'another-component', 0);
    assert.ok(result.ok, "expected a failure");
  });
});

// 'fails is the component is found but destroyed'
