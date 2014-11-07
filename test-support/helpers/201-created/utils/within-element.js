import {setContext} from './helper-context';

export default function(app, selector, callback){
  var elements = app.testHelpers.find(selector);

  setContext( elements[0] );
  callback();
}
