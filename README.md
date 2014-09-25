# Ember Test Helpers

### `expectComponent`
### `clickComponent`
### `expectView`
### `expectElement`
### `expectNoElement`

## Setup

  * Add ember-test-helpers to your package.json:
  * `npm install --save-dev ember-test-helpers`
  * import the setupTestHelpers function in your `tests/helpers/start-app.js`:
  * Add this line to to the top of `start-app.js`:
    * `import setupTestHelpers from '../201-created/test-helpers';`
  * Register the test helpers:
    * Add this line to `start-app.js` before `App.injectTestHelpers`
    * `setupTestHelpers();`
  * Update your `tests/.jshintrc` file to notify it of the new globals
    that these helpers have added. Add the following lines to the
    `predef` array (after "currentRouteName"):

```
"expectComponent",
"clickComponent",
"expectView",
"expectElement",
"expectNoElement",
```

  * You may need to restart your ember server so that it picks up the new .jshintrc file.

#### To do

 * Possible to automatically import helpers (via ember generator?)
 * possible to automatically add globals to .jshintrc?
