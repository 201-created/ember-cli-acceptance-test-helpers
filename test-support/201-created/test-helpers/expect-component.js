import {lookupComponent} from '../utils/lookup';
import eachView from '../utils/each-view';

var K = function(){};

export default function(app, expectation, options, message){
  var Component = lookupComponent(app, expectation);
  var $ = app.$;

  if (!Component) {
    ok(false, 'No Component called ' + expectation + ' exists.');
    return;
  }

  if (!message) {
    message = 'Expected to find component: ' + expectation;
  }

  if (!options) { options = {}; }

  var callbackFn = options.callbackFn || K;

  var found = 0;

  var elements = [];

  eachView(app, function(view){
    if (Component.detectInstance(view)) {
      found++;
      callbackFn(view, found);
      elements.push(view.element);
    }
  });

  ok(found > 0, message);

  if (options.contains) {
    var text = $(elements).text();
    if (text.indexOf(options.contains) === -1) {
      ok(false, 'Expected component ' + expectation + ' to contain "' + options.contains +
         '" but contained: "' + text + '"');
    } else {
      ok(true, 'Component ' + expectation + ' contains: "' + options.contains + '"');
    }
  }
}
