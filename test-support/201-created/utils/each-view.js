import {lookupRouter} from '../utils/lookup';

function iterateViews(callback){
  return function(view) {
    callback(view);
    view.get('childViews').forEach(iterateViews(callback));
  };
}

export default function(app, callback){
  var router = lookupRouter(app);
  var applicationView = router._activeViews.application[0];

  applicationView.get('childViews').forEach(iterateViews(callback));
}
