/* global ok */
import Ember from 'ember';

export default function(){
  Ember.Test.registerHelper('expectComponent', function(app, name, options, message){
    var router = app.__container__.lookup('router:main');
    var Component = app.__container__.lookupFactory('component:'+name);
    if (!Component) {
      ok(false, 'No Component called ' + name + ' exists.');
      return;
    }
    if (!message) {
      message = 'Expected to find component: ' + name;
    }

    var callbackFn = typeof options === 'function' ? options : Ember.K;

    var found = 0;

    var applicationView = router._activeViews['application'][0];

    applicationView.get('childViews').forEach(function(childView){
      console.log('checking child view',childView._debugContainerKey);
      if (Component.detectInstance(childView)) {
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
