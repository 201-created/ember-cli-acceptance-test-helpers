import {lookupComponent} from '../utils/lookup';
import eachView from '../utils/each-view';

var K = function(){};

export default function(app, expectation, count, options, message){
  var Component = lookupComponent(app, expectation);
  var $ = app.$;

  if (!Component) {
    return {
      ok: false,
      message: 'No component called ' + expectation + ' was found in the container'
    };
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

  var result = {
    ok: count ? found === count : found > 0, // if count specified then we must have exactly that many, otherwise we want at least 1
    message: message
  };

  if (result.ok && options.contains) {
    var text = $(elements).text();
    if (text.indexOf(options.contains) === -1) {
      result.ok = false;
      result.message = 'Expected component ' + expectation + ' to contain "' + options.contains +
         '" but contained: "' + text + '"';
    } else {
      result.ok = true;
      result.message = 'Component ' + expectation + ' contains: "' + options.contains + '"';
    }
  }

  return result;
}
