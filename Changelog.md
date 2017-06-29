# Ember CLI Acceptance Test Helpers Changelog

## Master

# 1.0.0

  * changing API to support qUnit v2
  * Since we are adding a custom assertion to QUnit (https://qunitjs.com/cookbook/#custom-assertions), we are changing the API to `hasX` instead of `expectX` since `assert.expectComponent` sounds weird.

## 0.4.3
  * Support expecting zero component instances via `expectComponent('my-component', 0)` see [35](https://github.com/201-created/ember-cli-acceptance-test-helpers/pull/35)

## 0.4.2
  * Fix bug in `clickComponent` (see [30](https://github.com/201-created/ember-cli-acceptance-test-helpers/issues/30))

## 0.4.1
  * Change `expectElement` and `expectNoElement` to accept a `message` key in the `options` hash (see [26](https://github.com/201-created/ember-cli-acceptance-test-helpers/pull/26).

## 0.4.0

 * Change `expectComponent` to use a container to support usage in integration tests (see [23](https://github.com/201-created/ember-cli-acceptance-test-helpers/pull/23) and [22](https://github.com/201-created/ember-cli-acceptance-test-helpers/issues/22) )
 * To use `expectComponent` with component integration tests, ember-qunit version >= 0.4.7 is required
 * Upgrade to ember-cli 1.13.8

## 0.3.5

 * Remove lodash dependency

## 0.3.4

 * Support `expectComponent` in Ember 1.13 (@givanse)

## 0.3.3

 * Fix bug in `expectComponent` (@Twinkletoes)

## 0.3.2

* Support Ember 1.11.0

## 0.3.1

 * LegacyBindAttrNode has no `get`

## 0.3.0

 * Link to Mocha fork (@backspace)
 * Add generator (@notmessenger)
