import {lookupRouter} from '../utils/lookup';

export default function(app, callback){
  var router = lookupRouter(app);
  var applicationView = router._activeViews.application[0];

  applicationView.get('childViews').forEach(callback);
}
