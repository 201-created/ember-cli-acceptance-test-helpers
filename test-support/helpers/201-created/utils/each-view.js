import {lookupRouter} from './lookup';

function iterateViews(callback, callbackHistory){
  return function(view) {
    if (!view.get) {
      // FIXME LegacyBindAttrNode has no `get` method
      return;
    }
    if (view.get('isDestroyed') || view.get('isDestroying')) {
      return;
    }

    /*
    FIXME: is it better to use `_state` to test for `isDestroy/ed/ing`?
    var state = view._state;
    if (!state) { state = view.state; }
    if (state !== 'inDOM') { return; }
    */

    if (callbackHistory.indexOf(view) === -1) {
      callback(view);
      callbackHistory.push(view);
    }
    view.get('childViews').forEach(iterateViews(callback, callbackHistory));
  };
}

export default function(app, callback){
  var allViews = app.__container__.lookup('-view-registry:main');

  if ( ! allViews ) { // Ember 1.11.0 compatibility
    allViews = Ember.View.views;
  } 
 
  var views = Object.keys(allViews).map(function(viewName) {
    return allViews[viewName];
  });

  var callbackHistory = [];
  views.forEach(iterateViews(callback, callbackHistory));
}
