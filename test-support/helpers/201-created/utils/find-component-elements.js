import eachView from './each-view';

export default function findComponentElements(container, componentKlass) {
  var elements = [];
  eachView(container, function(view){
    if (componentKlass.detectInstance(view)) {
      elements.push(view.element);
    }
  });

  return elements;
}
