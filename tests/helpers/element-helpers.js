export function makeElement(elementType, options){
  var el = $(document.createElement(elementType));
  if (options.class) { el.addClass('class', options.class); }
  if (options.text)  { el.text(options.text); }

  return el.get(0);
}

export function makeElements(elementType, options, count){
  var els = [];
  for (var i = 0; i < count; i++) {
    els.push(makeElement(elementType, options));
  }

  return $(els);
}

export function makeApp(findFn){
  return {
    testHelpers: {
      find: (...args) => $(findFn(...args))
    },
    $: $
  };
}
