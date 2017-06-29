# Ember Test Helpers
[![Build Status](https://travis-ci.org/201-created/ember-cli-acceptance-test-helpers.svg?branch=master)](https://travis-ci.org/201-created/ember-cli-acceptance-test-helpers)

A set of useful helper for ember-cli acceptance tests. Includes
`hasComponent`, `hasElement`, and `clickComponent`.

## Note

### `hasComponent`

`hasComponent(assert, componentName, count, options)` or `assert.hasComponent(componentName, count, options)`

Passes when the component exists in the container and is in the DOM.

`count` optional, defaults to `null`. `null` means 'at least one'.
If an integer count is provided, there must be exactly that many components in the DOM.

If `options.contains` is set, the expectation only passes if the
component is in the DOM and contains the string from `options.contains`.

`hasComponent` can also be used in component integration tests. See [expect-component-hbs-integration-test.js](https://github.com/201-created/ember-cli-acceptance-test-helpers/blob/master/tests/integration/expect-component-hbs-integration-test.js) for an example.
Note that `ember-qunit` version 0.4.7 or greater is required to make the component integration tests work properly.

### `clickComponent`

`clickComponent(assert, componentName, selector)`

Clicks the CSS selector inside the component(s) of type `componentName`
in the DOM.

### `hasElement`

`hasElement(assert, selector, count, options)` or `assert.hasElement(selector, count, options)`

Expect that `count` instances of the selector are in the DOM.

`count` is optional and defaults to 1.

If `options.contains` is set, the expectation will only pass if there
are exactly count instances of the selector that include the string
value of `options.contains`.

If `options.message` is set, the message will be displayed in the test results instead of the default,  `Found 0 of '.selector' but expected 1.`

### `hasNoElement`

`hasNoElement(assert, selector, options)` or `assert.hasNoElement(selector, options)`

A convenience for `hasElement` when the count is 0.

`options` can include a `contains` and/or a `message` key.

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
"hasComponent",
"hasElement",
"hasNoElement",
"clickComponent",
```

  * You may need to restart your ember server so that it picks up the new .jshintrc file.

### Releasing Updates to NPM
 * Create an npm user if you don't have one using `npm adduser`
 * ask a team member to add your user to npm for this project
 * update the version in `package.json`
 * `npm publish`
 * Visit https://www.npmjs.com/package/ember-cli-acceptance-test-helpers and confirm the correct version number

If you have errors running `npm adduser`, you may have previously set your npm registry to a read-only or non-standard URL.  
 * Run this command to check `npm config get registry`  
 * Run this command to reset:`npm config set registry https://registry.npmjs.org/`

[more docs](https://docs.npmjs.com/getting-started/publishing-npm-packages)

#### To do

 * clickLink
 * test/document `hasClass` option
 * a `within(selector/component, block&)` helper
 * every expectation only adds 1 expectation, so it's easy to use `expect(X)`
