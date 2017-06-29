import wrapInExpectation from './utils/wrap-in-expectation';

import rawExpectElement from   './raw/has-element';
import rawExpectNoElement from './raw/has-no-element';
import rawExpectComponent from './raw/has-component';

var wrappedExpectElement   = wrapInExpectation(rawExpectElement);
var wrappedExpectNoElement = wrapInExpectation(rawExpectNoElement);
var wrappedExpectComponent = wrapInExpectation(rawExpectComponent);

export {
  wrappedExpectElement,
  wrappedExpectNoElement,
  wrappedExpectComponent
};
