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

  count = options.count === undefined ? 1 : options.count;

  var elements = app.testHelpers.find(selector, getContext());

  var result = {};

  if (options.contains) {
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
    result.message = 'Found ' + elements.length + ' of ' + selector;
    result.ok = elements.length === count;
    if (!result.ok) {
      result.message += ' but expected ' + count;
    }
  }

  return result;
}
