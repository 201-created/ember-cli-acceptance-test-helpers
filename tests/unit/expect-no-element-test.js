import { module} from 'qunit';
import { test } from 'ember-qunit';
import expectNoElement from '../helpers/201-created/raw/expect-no-element';
import {
  makeElement,
  makeElements,
  makeApp
} from '../helpers/element-helpers';

module('Unit - expectNoElement');

test('expectNoElement exists', function(assert) {
  assert.ok(expectNoElement, 'it exists');
});

test('passes when the element is not found by app.testHelpers.find', function(assert) {
  var find = function(){
    return [];
  };

  var app = makeApp(find);

  var result = expectNoElement(app, '.the-div');

  assert.ok(result.ok, 'passes');
  assert.equal(result.message, 'Found 0 of .the-div');
});

test('fails when the element is found by app.testHelpers.find', function(assert) {
  var find = function(){
    return [makeElement('div', {class:'the-div'})];
  };

  var app = makeApp(find);

  var result = expectNoElement(app, '.the-div');

  assert.ok(!result.ok, 'fails');
  assert.equal(result.message, 'Found 1 of .the-div but expected 0');
});

test('takes option `contains`', function(assert) {
  var find = function(){
    return makeElements('div', {class:'the-div', text: 'foo bar'}, 1);
  };

  var app = makeApp(find);

  var result = expectNoElement(app, '.the-div', {contains:'boo'});

  assert.ok(result.ok, 'passes');
  assert.equal(result.message, 'Found 0 of .the-div containing "boo"');

  result = expectNoElement(app, '.the-div', {contains:'foo'});

  assert.ok(!result.ok, 'fails');
  assert.equal(result.message, 'Found 1 of .the-div containing "foo" but expected 0');
});

test('expectNoElement fails with a custom message', function(assert) {
  let find = function(){
    return [makeElement('div', {class:'the-div'})];
  };
  let app = makeApp(find);
  let message = 'custom test label message';
  let result = expectNoElement(app, '.is-not-present', {message});

  assert.ok(!result.ok, 'pre cond: fails');
  assert.equal(result.message, message, 'custom message appears on expectElement fail');
});

test('expectNoElement passes with a custom message', function(assert) {
  let app = makeApp(() => []);
  let message = 'custom test label message';
  let result = expectNoElement(app, '.is-not-present', {message});

  assert.ok(result.ok, 'pre cond: passes');
  assert.equal(result.message, message, 'custom message appears on expectNoElement pass');
});

test('expectNoElement with contains passes with a custom message', function(assert) {
  let app = makeApp(() => []);
  let message = 'custom test label message';
  let result = expectNoElement(app, '.is-present', {contains: 'foo', message});

  assert.ok(result.ok, 'pre cond: passes');
  assert.equal(result.message, message, 'custom message appears on expectNoElement fail');
});
