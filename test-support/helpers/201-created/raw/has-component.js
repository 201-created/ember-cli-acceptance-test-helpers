import {lookupComponent} from '../utils/lookup';
import eachView from '../utils/each-view';
import Ember from 'ember';

const { isPresent } = Ember;

var K = function(){};

export default function(appOrContainer, assert, expectation, count, options, customMessage){
  let container;
  if (appOrContainer.__container__) {
    container = appOrContainer.__container__;
  } else {
    container = appOrContainer;
  }
  var Component = lookupComponent(container, expectation);
  var $ = Ember.$;

  if (!Component) {
    return {
      ok: false,
      message: 'No component called ' + expectation + ' was found in the container'
    };
  }

  if (!options) { options = {}; }

  var callbackFn = options.callbackFn || K;

  var found = 0;

  var elements = [];

  eachView(container, function(view){
    if (Component.detectInstance(view)) {
      found++;
      callbackFn(view, found);
      elements.push(view.element);
    }
  });

  var message = count ?
                'Expected to find '+count+' components of type ' + expectation + '. Found: ' + found :
                'Expected to find at least one component: ' + expectation;

  var result = {
    ok: isPresent(count) ? found === count : found > 0, // if count specified then we must have exactly that many, otherwise we want at least 1
    message: customMessage || message
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
