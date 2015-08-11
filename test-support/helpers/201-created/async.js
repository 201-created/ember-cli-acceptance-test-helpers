import {lookupComponent} from './utils/lookup';
import findComponentElements from './utils/find-component-elements';

export function clickComponent(app, expectation, selector){
  var container = app.container;
  var Component = lookupComponent(container, expectation);

  if (!Component) {
    ok(false, 'No Component called ' + expectation + ' exists.');
    return;
  }

  var elements = findComponentElements(container, Component);
  var context = app.$(elements);

  return app.testHelpers.click(selector, context);
}
