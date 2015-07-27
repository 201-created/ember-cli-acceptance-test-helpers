import Ember from 'ember';
import startApp from '../helpers/start-app';
import expectComponent from '../helpers/201-created/raw/expect-component';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

var App;

moduleForComponent('simple-component', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  },
  integration: true
});

test('finds component in hbs integration test', function(assert) {
  this.render(hbs`{{simple-component}}`);

  andThen(function() {
	  var result = expectComponent(App, 'simple-component', 1);
    assert.ok(result.ok, "expected success");
	});
});

test('does not find component when not present in hbs integration test', function(assert) {
  this.render(hbs`{{another-component}}`);

  andThen(function() {
	  var result = expectComponent(App, 'simple-component', 1);
    assert.ok(!result.ok, "expected a failure");
	});
});
