import {getContext} from '../utils/helper-context';

export default function(app, selector, options, message){
  if (!options) {
    options = {};
  }

  var element = app.testHelpers.find(selector, getContext());

  return {
    ok: element.length === 0,
    message: message || 'Expected to find 0 instances of ' + selector
  };
}
