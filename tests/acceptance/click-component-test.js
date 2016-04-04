import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../../tests/helpers/start-app';
import expectComponent from '../helpers/201-created/raw/expect-component';
import { clickComponent } from '../helpers/201-created/async';

module('Acceptance | click component', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('visiting /click-component', function(assert) {
  visit('/click-component');

  andThen(function() {
    assert.equal(currentURL(), '/click-component');
  });
});

test('clickComponent() API test', function(assert) {
  visit('/click-component');

  let app             = this.application;
  let beforeClickText = 'CLICK IT!!!';
  let afterClickText  = 'Good Job';

  andThen(function() {
    expectComponent(app, 'click-component', 1);
    assert.equal(find('.txt').text().trim(), beforeClickText);
    clickComponent(app, 'click-component', '.btn');
  });
  andThen(function() {
    assert.equal(find('.txt').text().trim(), afterClickText);
  });
});