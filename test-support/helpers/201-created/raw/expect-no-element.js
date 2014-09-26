export default function(app, selector, options, message){
  if (!options) {
    options = {};
  }

  var element = app.testHelpers.find(selector);

  return {
    ok: element.length === 0,
    message: message || 'Exepcted to find 0 instances of ' + selector
  };
}
