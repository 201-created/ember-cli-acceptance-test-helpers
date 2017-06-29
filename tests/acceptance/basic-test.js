import { test } from 'qunit';
import moduleForAcceptance from '../helpers/module-for-acceptance';
import hasComponentRaw from '../helpers/201-created/raw/expect-component';
/* global hasComponent, hasElement, hasNoElement, withinElement */

moduleForAcceptance('Acceptance | Basic');

test('visiting /', function(assert) {
  assert.expect(1);
  visit('/');

  andThen(() => {
    assert.equal(currentPath(), 'index');
  });
});

test('visiting /, hasComponent', function(assert) {
  assert.expect(5);
  visit('/');

  andThen(() => {
    hasComponent(assert, 'simple-component');
    assert.hasComponent('simple-component')

    var result = hasComponentRaw(this.application, assert, 'another-component');
    assert.ok(!result.ok, 'fails on invisible component');

    click('.link');

    andThen(() => {
      hasComponent(assert, 'another-component');
      var result = hasComponentRaw(this.application, assert, 'simple-component');
      assert.ok(!result.ok, 'fails on invisible component');
    });
  });
});

test('visiting /, hasElement', function(assert) {
  assert.expect(1);
  visit('/');

  andThen(() => {
    hasElement(assert, '.some-div');
  });
});

test('visiting /, hasNoElement', function(assert) {
  assert.expect(3);
  visit('/');

  andThen(() => {
    hasNoElement(assert, '.missing-div');
    hasNoElement(assert, 'h2', {contains: 'text that is not there'});
    assert.hasNoElement('h2', {contains: 'text that is not there'})
  });
});

test('visiting /, withinElement', function(assert) {
  assert.expect(4);

  visit('/');

  andThen(() => {
    withinElement('.some-div', function(){
      hasElement(assert, '.inner-div');
      assert.hasElement('.inner-div');
      hasNoElement(assert, '.outer-div');
    });

    hasElement(assert, 'h2');
  });
});
