# Ember Test Helpers

### `expectComponent`

`expectComponent(componentName, count, options)`

Passes when the component exists in the container and is in the DOM.

`count` optional, defaults to 1.

If `options.contains` is set, the expectation only passes if the
component is in DOM and contains the string from `options.contains`.

### `clickComponent`

`clickComponent(componentName, selector)`

Clicks the CSS selector inside the component(s) of type `componentName`
in the DOM.

### `expectElement`

`expectElement(selector, count, options)`

Expect that `count` instances of the selector are in the DOM.

`count` is optional and defaults to 1.

If `options.contains` is set, the expectation will only pass if there
are exactly count instances of the selector that include the string
value of `options.contains`.

### `expectNoElement`

`expectNoElement(selector, options)`

A convenience for `expectElement` when the count is 0.

`options` can include a `contains` key.

## Setup

  * Add ember-test-helpers to your package.json:
  * `npm install --save-dev ember-test-helpers`
  * import the registerTestHelpers function in your `tests/helpers/start-app.js`:
  * Add this line to to the top of `start-app.js`:
    * `import registerTestHelpers from './201-created/register-test-helpers';`
  * Register the test helpers:
    * Add this line to `start-app.js` before `App.injectTestHelpers`
    * `registerTestHelpers();`
  * Update your `tests/.jshintrc` file to notify it of the new globals
    that these helpers have added. Add the following lines to the
    `predef` array (after "currentRouteName"):

```
"expectComponent",
"clickComponent",
"expectElement",
"expectNoElement",
```

  * You may need to restart your ember server so that it picks up the new .jshintrc file.

#### To do

 * Possible to automatically import helpers (via ember generator?) (yes: insertIntoFile)
 * possible to automatically add globals to .jshintrc? (yes: insertIntoFile)
 * clickLink
 * test/document `hasClass` option
 * ensure that `expectNoElement(selector, {contains:text}) works`
 * a `within(selector/component, block&)` helper
 * every expectation only adds 1 expectation, so it's easy to use `expect(X)`
