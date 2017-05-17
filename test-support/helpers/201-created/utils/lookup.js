export function lookupRouter(container){
  return container.lookup('router:main');
}

export function lookupComponent(container, componentName){
  if (typeof container.factoryFor === 'function') {
    let component = container.factoryFor('component:' + componentName);
    return component ? component.class : undefined;
  }
  return container.lookupFactory('component:' + componentName);
}

export function lookupView(container, viewName){
  if (typeof container.factoryFor === 'function') {
    let view = container.factoryFor('view:' + viewName);
    return view ? view.class : undefined;
  }
  return container.lookupFactory('view:' + viewName);
}
