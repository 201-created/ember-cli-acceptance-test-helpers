import wrapInExpectation from './utils/wrap-in-expectation';

import rawExpectElement from   './raw/expect-element';
import rawExpectNoElement from './raw/expect-no-element';
import rawExpectComponent from './raw/expect-component';

var wrappedExpectElement   = wrapInExpectation(rawExpectElement);
var wrappedExpectNoElement = wrapInExpectation(rawExpectNoElement);
var wrappedExpectComponent = wrapInExpectation(rawExpectComponent);

export {
  wrappedExpectElement,
  wrappedExpectNoElement,
  wrappedExpectComponent
};
