import eachView from './each-view';

export default function findComponentElements(app, componentKlass) {
  var elements = [];
  eachView(app, function(view){
    if (componentKlass.detectInstance(view)) {
      elements.push(view.element);
    }
  });

  return elements;
}
