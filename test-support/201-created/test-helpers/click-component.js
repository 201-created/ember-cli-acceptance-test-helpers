import {lookupComponent} from '../utils/lookup';
import findComponentElements from '../utils/find-component-elements';

export default function(app, expectation, selector){
  var Component = lookupComponent(app, expectation);

  if (!Component) {
    ok(false, 'No Component called ' + expectation + ' exists.');
    return;
  }

  var elements = findComponentElements(app, Component);
  var context = app.$(elements);

  return app.testHelpers.click(selector, context);
}
