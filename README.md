# Ember Test Helpers

A set of useful helper for ember-cli acceptance tests. Includes
`expectComponent`, `expectElement`, and `clickComponent`.

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

## Mocha

If you want to use this with [`ember-cli-mocha`](https://github.com/switchfly/ember-cli-mocha), try [this fork](https://github.com/backspace/ember-cli-acceptance-test-helpers/tree/use-mocha).

## Setup

  * Run `ember generate ember-cli-acceptance-test-helpers`
  * Commit any file changes made if your application is under source code management

The generator makes changes to files assuming the structure of them has not changed much from the default version created during the initial Ember application creation. If too many changes have been made you will need to manually make the changes below instead:

  * Add ember-test-helpers to your package.json:
  * `npm install --save-dev ember-cli-acceptance-test-helpers`
  * import the registerTestHelpers function in your `tests/helpers/start-app.js`:
  * Add this line to to the top of `start-app.js`:
    * `import registerAcceptanceTestHelpers from './201-created/register-acceptance-test-helpers';`
  * Register the test helpers:
    * Add this line to `start-app.js` before `App.injectTestHelpers`
    * `registerAcceptanceTestHelpers();`
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

 * clickLink
 * test/document `hasClass` option
 * ensure that `expectNoElement(selector, {contains:text}) works`
 * a `within(selector/component, block&)` helper
 * every expectation only adds 1 expectation, so it's easy to use `expect(X)`
