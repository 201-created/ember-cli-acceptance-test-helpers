import {lookupRouter} from './lookup';

export default function(app, callback){
  var allViews = Ember.View.views;
  var views = Object.keys(allViews).map(function(viewName) {
    return allViews[viewName];
  });

  var liveViews = views.filter(function(view) {
    return (view.get && // fix for LegacyBindAttrNode has no get method
            !view.get('isDestroyed') && !view.get('isDestroying'));
  });

  liveViews.forEach(callback); // views contains every view in the page
}
