export default function(app, selector, options, message){
  if (!options) {
    options = {};
  }

  var count = 0;

  if (!message) {
    message = 'Expected to find ' + count + ' of ' + selector;
  }

  var element = app.testHelpers.find(selector);

  equal(element.length, count, message);
}
