import Ember from 'ember';
import Application from '../../app';
import config from '../../config/environment';
import registerAcceptanceTestHelpers from './201-created/register-acceptance-test-helpers';

export default function startApp(attrs) {
  let attributes = Ember.merge({}, config.APP);
  attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

  return Ember.run(() => {
    const application = Application.create(attributes);
    const assert = attributes.assert || window.QUnit.assert;
    registerAcceptanceTestHelpers(assert);
    application.setupForTesting();
    application.injectTestHelpers();
    return application;
  });
}
