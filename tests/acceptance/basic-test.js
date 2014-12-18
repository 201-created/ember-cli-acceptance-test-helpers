import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

module('Acceptance: Basic', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('visiting /', function() {
  visit('/');

  andThen(function() {
    equal(currentPath(), 'index');
  });
});

test('visiting /, expectComponent', function() {
  visit('/');

  andThen(function() {
    App.testHelpers.expectComponent('simple-component');
  });
});

test('visiting /, expectElement', function() {
  visit('/');

  andThen(function() {
    App.testHelpers.expectElement('.some-div');
  });
});

test('visiting /, expectNoElement', function() {
  visit('/');

  andThen(function() {
    App.testHelpers.expectNoElement('.missing-div');
    App.testHelpers.expectNoElement('h2', {contains: 'there'});
  });
});

test('visiting /, withinElement', function() {
  visit('/');

  andThen(function() {
    App.testHelpers.withinElement('.some-div', function(){
      App.testHelpers.expectElement('.inner-div');
      App.testHelpers.expectNoElement('.outer-div');
    });
  });
});
