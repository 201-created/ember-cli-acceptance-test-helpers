import expectComponent from '../helpers/201-created/raw/expect-component';

QUnit.module('expectComponent');

test('it exists', function(){
  ok(expectComponent, 'it exists');
});

function makeContainer(key, value){
  return {
    lookupFactory: function(_key){
      if (key === _key) { return value; }
    }
  };
}

function makeApp(findFn, componentName, componentKlass){
  return {
    testHelpers: { find: findFn },
    __container__: makeContainer(componentName, componentKlass),
    $: $
  };
}

test('fails if the component is not in the container', function(){
  var findFn = function(){};
  var DatePicker = function(){};

  var app = makeApp(findFn, 'component:date-picker', DatePicker);

  var result = expectComponent(app, 'non-existent');
  ok(!result.ok, 'fails');
  equal(result.message, 'No component called non-existent was found in the container');
});

test('passes when the component is ', function(){
  var findFn = function(){};
  var DatePicker = function(){};

  var app = makeApp(findFn, 'component:date-picker', DatePicker);

  var result = expectComponent(app, 'non-existent');
  ok(!result.ok, 'fails');
  equal(result.message, 'No component called non-existent was found in the container');
});
