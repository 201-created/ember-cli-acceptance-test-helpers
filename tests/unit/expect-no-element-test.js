import { module} from 'qunit';
import { test } from 'ember-qunit';
import expectNoElement from '../helpers/201-created/raw/expect-no-element';

module('Unit - expectNoElement');

test('expectNoElement exists', function(assert) {
  assert.ok(expectNoElement, 'it exists');
});

function makeElement(elementType, options){
  var el = $(document.createElement(elementType));
  if (options.class) { el.addClass('class', options.class); }
  if (options.text)  { el.text(options.text); }

  return el.get(0);
}

function makeElements(elementType, options, count){
  var els = [];
  for (var i = 0; i < count; i++) {
    els.push(makeElement(elementType, options));
  }

  return $(els);
}

function makeApp(findFn){
  return {
    testHelpers: { find: findFn },
    $: $
  };
}

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
