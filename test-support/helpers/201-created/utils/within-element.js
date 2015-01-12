import {getContext, setContext} from './helper-context';

export default function(app, selector, callback){
  var elements = app.testHelpers.find(selector);

  var previousContext = getContext();
  setContext( elements[0] );
  callback();
  setContext( previousContext );
}
