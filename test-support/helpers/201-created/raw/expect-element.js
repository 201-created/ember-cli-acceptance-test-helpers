function filterElements(elements, text){
  return elements.filter(':contains(' + text + ')');
}

export default function(app, selector, options){
  var count;

  if (typeof options === 'number') {
    count   = options;
    options = {count:count};
  }

  if (!options) { options = {}; }

  count = options.count === undefined ? 1 : options.count;

  var elements = app.testHelpers.find(selector);

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
