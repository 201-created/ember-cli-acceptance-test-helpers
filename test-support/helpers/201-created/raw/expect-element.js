import {getContext} from '../utils/helper-context';

function filterElements(elements, text){
  return elements.filter(':contains(' + text + ')');
}

export default function(app, selector, count, options){
  if (typeof count === 'object') {
    options = count;
  }

  if (!options) { options = {}; }

  if (typeof count === 'number') {
    options.count = count;
  }
  // debugger;

  count = options.count === undefined ? 1 : options.count;

  var elements = app.testHelpers.find(selector, getContext());

  var result = {};

  // options
  // {message: whatever, contains: thka}

  if (options.contains) {
    // why is options.contains false
    var text = options.contains;
    var filtered = filterElements(elements, text);

    result.ok = filtered.length === count;

    result.message = 'Found ' + filtered.length + ' of ' + selector +
      ' containing "' + text + '"';

    if (!result.ok) {
      if (elements.length === filtered.length) {
        result.message = 'Found ' + filtered.length + ' of ' + selector +
          ' containing "' + text + '" but expected ' + count;
      } else {
        result.message = 'Found ' + elements.length + ' of ' + selector +
          ' but ' + filtered.length + '/' + count + ' containing "' + text + '"';
      }
    }
  } else {
    // i'm erroring here
    // want result.message = result.message; ...but this isn't really anything

    result.ok = elements.length === count;

    // move message to a helper

    if (options.message) {
      let message = options.message;
      result.message = message;
    }
    else {
      result.message = 'Found ' + elements.length + ' of ' + selector;

      if (!result.ok) {
        // and here
        result.message += ' but expected ' + count;
      }
    }
  }

  return result;
}
