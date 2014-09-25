import {lookupView} from '../utils/lookup';
import eachView from '../utils/each-view';

var K = function(){};

export default function(app, expectation, callbackFn, message){
  var View = lookupView(app, expectation);

  if (!View) {
    ok(false, 'No View called ' + expectation + ' exists.');
    return;
  }

  if (!message) {
    message = 'Expected to find view: ' + expectation;
  }

  if (!callbackFn) { callbackFn = K; }

  var found = 0;

  eachView(app, function(view){
    if (View.detectInstance(view)) {
      found++;
      callbackFn(view, found);
    }
  });

  ok(found > 0, message);
}
