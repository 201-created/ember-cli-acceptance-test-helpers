export function lookupRouter(app){
  return app.__container__.lookup('router:main');
}

export function lookupComponent(app, componentName){
  return app.__container__.lookupFactory('component:' + componentName);
}

export function lookupView(app, viewName){
  return app.__container__.lookupFactory('view:' + viewName);
}
