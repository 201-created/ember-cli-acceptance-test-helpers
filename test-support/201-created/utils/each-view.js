import {lookupRouter} from '../utils/lookup';

function iterateViews(callback){
  return function(view) {
    if (view.get('isDestroyed') || view.get('isDestroying')) {
      return;
    }

    /*
    FIXME: is it better to use `_state` or test for `isDestroy/ed/ing`?
    var state = view._state;
    if (!state) { state = view.state; }
    if (state !== 'inDOM') { return; }
    */

    callback(view);
    view.get('childViews').forEach(iterateViews(callback));
  };
}

export default function(app, callback){
  var router = lookupRouter(app);
  var applicationView = router._activeViews.application[0];

  applicationView.get('childViews').forEach(iterateViews(callback));
}
