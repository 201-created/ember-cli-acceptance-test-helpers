import hasComponent from '../helpers/201-created/raw/expect-component';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('simple-component', {
  integration: true
});

test('finds root component in hbs integration test', function(assert) {
  this.render(hbs`{{simple-component}}`);
  var result = hasComponent(this.container, assert, 'simple-component', 1);
  assert.ok(result.ok, "expected success");
});

test('does not find component when not present in hbs integration test', function(assert) {
  this.render(hbs`{{another-component}}`);
  var result = hasComponent(this.container, assert, 'simple-component', 1);
  assert.ok(!result.ok, "expected a failure");
});

test('finds inner component in hbs integration test', function(assert) {
  this.render(hbs`{{compound-component}}`);
  var result = hasComponent(this.container, assert, 'simple-component', 1);
  assert.ok(result.ok, "expected success");
});
