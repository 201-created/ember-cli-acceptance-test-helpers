/* global ok */
export default function(helperFn){
  return function(){
    var result = helperFn.apply(null, arguments);

    ok(result.ok, result.message);
  };
}
