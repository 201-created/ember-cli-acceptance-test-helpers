import wrapInExpectation from './utils/wrap-in-expectation';

import rawExpectElement from   './raw/expect-element';
import rawExpectNoElement from './raw/expect-no-element';
import rawExpectComponent from './raw/expect-component';

var expectElement   = wrapInExpectation(rawExpectElement);
var expectNoElement = wrapInExpectation(rawExpectNoElement);
var expectComponent = wrapInExpectation(rawExpectComponent);

export { expectElement, expectNoElement, expectComponent };
