import Ember from 'ember';
import startApp from '../helpers/start-app';
import expectComponent from '../helpers/201-created/raw/expect-component';
import { module } from 'qunit';
import { test } from 'ember-qunit';

var App;

module('Acceptance: Basic', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentPath(), 'index');
  });
});

test('visiting /, expectComponent', function(assert) {
  visit('/');

  andThen(function() {
    App.testHelpers.expectComponent('simple-component');

    var result = expectComponent(App, 'another-component');
    assert.ok(!result.ok, 'fails on invisible component');

    click('.link');
  });

  andThen(function() {
    App.testHelpers.expectComponent('another-component');

    var result = expectComponent(App, 'simple-component');
    assert.ok(!result.ok, 'fails on invisible component');
  });
});

test('visiting /, expectElement', function(assert) {
  visit('/');

  andThen(function() {
    App.testHelpers.expectElement('.some-div');
  });
});

test('visiting /, expectNoElement', function(assert) {
  visit('/');

  andThen(function() {
    App.testHelpers.expectNoElement('.missing-div');
    App.testHelpers.expectNoElement('h2', {contains: 'text that is not there'});
  });
});

test('visiting /, withinElement', function(assert) {
  visit('/');

  andThen(function() {
    App.testHelpers.withinElement('.some-div', function(){
      App.testHelpers.expectElement('.inner-div');
      App.testHelpers.expectNoElement('.outer-div');
    });

    App.testHelpers.expectElement('h2');
  });
});
