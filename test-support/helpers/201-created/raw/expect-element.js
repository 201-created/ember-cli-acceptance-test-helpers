import {getContext} from '../utils/helper-context';

function filterElements(elements, text){
  return elements.filter(':contains(' + text + ')');
}

function buildMessage(selector, { filteredCount, selectorCount, ok }, { contains, message, count }) {
  if (!message) {
    if (contains) {
      message = 'Found ' + filteredCount + ' of ' + selector +
        ' containing "' + contains + '"';

      if (!ok) {
        if (selectorCount === filteredCount) {
          message = 'Found ' + filteredCount + ' of ' + selector +
            ' containing "' + contains + '" but expected ' + count;
        } else {
          message = 'Found ' + selectorCount + ' of ' + selector +
            ' but ' + filteredCount + '/' + count + ' containing "' + contains + '"';
        }
      }
    }
    else {
      message = 'Found ' + selectorCount + ' of ' + selector;

      if (!ok) {
        message += ' but expected ' + count;
      }
    }
  }
  return message;
}

export default function(app, selector, count, options){
  if (typeof count === 'object') {
    options = count;
  }

  if (!options) { options = {}; }

  if (typeof count === 'number') {
    options.count = count;
  }

  if (options.count === undefined) {
    options.count = 1;
  }

  var elements = app.testHelpers.find(selector, getContext());

  var result = {};

  result.selectorCount = elements.length;

  if (options.contains) {
    let filtered = filterElements(elements, options.contains);

    result.ok = filtered.length === options.count;
    result.filteredCount = filtered.length;

  } else {
    result.ok = elements.length === options.count;
  }

  result.message = buildMessage(selector, result, options);

  return result;
}
