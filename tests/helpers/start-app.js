import Ember from 'ember';
import Application from '../../app';
import Router from '../../router';
import config from '../../config/environment';
import registerAcceptanceTestHelpers from './201-created/register-acceptance-test-helpers';

export default function startApp(attrs) {
  var application;

  var attributes = Ember.merge({}, config.APP);
  attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

  Router.reopen({
    location: 'none'
  });

  Ember.run(function() {
    application = Application.create(attributes);
    registerAcceptanceTestHelpers();
    application.setupForTesting();
    application.injectTestHelpers();
  });

  return application;
}
