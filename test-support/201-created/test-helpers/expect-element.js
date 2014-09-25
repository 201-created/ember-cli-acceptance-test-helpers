export default function(app, selector, options, message){
  var count;

  if (typeof options === 'number') {
    count = options;
    options = {count:count};
  }

  if (!options) { options = {}; }

  count = options.count === undefined ? 1 : options.count;

  if (!message) { message = 'Expected to find ' + count + ' of ' + selector; }

  if (options.text) {
    selector = selector + ':contains(' + options.text + ')';
  }

  var element = app.testHelpers.find(selector);

  equal(element.length, count, message);
}
