export default function(helperFn){
  return function(app, assert){
    var result = helperFn.apply(null, arguments);

    assert.ok(result.ok, result.message);
  };
}
