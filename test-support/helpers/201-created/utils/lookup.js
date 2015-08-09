export function lookupRouter(container){
  return container.lookup('router:main');
}

export function lookupComponent(container, componentName){
  return container.lookupFactory('component:' + componentName);
}

export function lookupView(container, viewName){
  return container.lookupFactory('view:' + viewName);
}
