import Application from '../../app';
import config from '../../config/environment';
import { merge } from '@ember/polyfills';
import { run } from '@ember/runloop';
import registerAcceptanceTestHelpers from './201-created/register-acceptance-test-helpers';

export default function startApp(attrs) {
  let attributes = merge({}, config.APP);
  attributes.autoboot = true;
  attributes = merge(attributes, attrs); // use defaults, but you can override;

  return run(() => {
    let application = Application.create(attributes);
    const assert = attributes.assert || window.QUnit.assert;
    registerAcceptanceTestHelpers(assert);
    application.setupForTesting();
    application.injectTestHelpers();
    return application;
  });
}
