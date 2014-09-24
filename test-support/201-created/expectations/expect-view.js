/* global ok */
import Ember from 'ember';

export default function(){
  Ember.Test.registerHelper('expectView', function(app, name, options, message){
    var router = app.__container__.lookup('router:main');
    var View = app.__container__.lookupFactory('view:'+name);
    if (!View) {
      ok(false, 'No View called ' + name + ' exists.');
      return;
    }
    if (!message) {
      message = 'Expected to find view: ' + name;
    }

    var callbackFn = typeof options === 'function' ? options : Ember.K;

    var found = 0;

    var applicationView = router._activeViews['application'][0];

    applicationView.get('childViews').forEach(function(childView){
      console.log('checking child view',childView._debugContainerKey);
      if (View.detectInstance(childView)) {
        console.log('found');
        found++;
        callbackFn(childView);
      } else {
        console.log('not found');
      }
    });

    console.log('found: ' + found);
    ok(found > 0, message);
  });
}
