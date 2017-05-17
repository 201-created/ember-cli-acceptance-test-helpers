import { test } from 'qunit';
import moduleForAcceptance from '../helpers/module-for-acceptance';
import expectComponentRaw from '../helpers/201-created/raw/expect-component';
/* global expectComponent, expectElement, expectNoElement, withinElement */

moduleForAcceptance('Acceptance | Basic');

test('visiting /', function(assert) {
  assert.expect(1);
  visit('/');

  andThen(() => {
    assert.equal(currentPath(), 'index');
  });
});

test('visiting /, expectComponent', function(assert) {
  assert.expect(4);
  visit('/');

  andThen(() => {
    expectComponent(assert, 'simple-component');

    var result = expectComponentRaw(this.application, assert, 'another-component');
    assert.ok(!result.ok, 'fails on invisible component');

    click('.link');

    andThen(() => {
      expectComponent(assert, 'another-component');

      var result = expectComponentRaw(this.application, assert, 'simple-component');
      assert.ok(!result.ok, 'fails on invisible component');
    });
  });
});

test('visiting /, expectElement', function(assert) {
  assert.expect(1);
  visit('/');

  andThen(() => {
    expectElement(assert, '.some-div');
  });
});

test('visiting /, expectNoElement', function(assert) {
  assert.expect(2);
  visit('/');

  andThen(() => {
    expectNoElement(assert, '.missing-div');
    expectNoElement(assert, 'h2', {contains: 'text that is not there'});
  });
});

test('visiting /, withinElement', function(assert) {
  assert.expect(3);
  visit('/');

  andThen(() => {
    withinElement('.some-div', function(){
      expectElement(assert, '.inner-div');
      expectNoElement(assert, '.outer-div');
    });

    expectElement(assert, 'h2');
  });
});
