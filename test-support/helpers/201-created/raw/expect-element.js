function filterElements(elements, text){
  return elements.filter(':contains(' + text + ')');
}

export default function(app, selector, options, message){
  var count;

  if (typeof options === 'number') {
    count = options;
    options = {count:count};
  }

  if (!options) { options = {}; }

  count = options.count === undefined ? 1 : options.count;

  if (!message) { message = 'Expected to find ' + count + ' of ' + selector; }

  var elements = app.testHelpers.find(selector);

  var result = {};

  result.message = 'Found ' + elements.length + ' of ' + selector;

  if (elements.length === count) {
    if (options.contains) {
      var text = options.contains;
      var filtered = filterElements(elements, text);
      result.ok = filtered.length === count;
      if (!result.ok) {
        result.message += ' but ' + filtered.length + ' containing "' +
          text + '"';
      } else {
        result.message += ' containing "' + text + '"';
      }
    } else {
      result.ok = true;
    }
  } else {
    result.ok = false;
    result.message += ' but expected ' + count;
  }

  return result;
}
