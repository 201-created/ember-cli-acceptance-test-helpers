# How to Contribute

Welcome! Thanks for considering to contribute to `ember-cli-acceptance-test-helpers`. Below are the steps outlined to submit your contributions.

## Getting Started

* Make sure you have a GitHub account. If you don't have one, you can sign up [here for a free account](https://github.com/signup/free).
* Submit an [issue](https://github.com/201-created/ember-cli-acceptance-test-helpers/issues/new), assuming one does not already exist.
  * Clearly describe the bug that you are seeing or a feature you would like to add. For feature requests, feel free to include example(s) of what the api will look like after your changes.
  * If you want a feature but are not sure how to go about implementing it, open an issue anyways and ask for help/guidance.
  * [Fork the repository](https://github.com/201-created/ember-cli-acceptance-test-helpers/issues/26#fork-destination-box) on GitHub.

## Assumptions/Prerequisites

This library is an Ember addon. As such, we assume the following:

* You have `node` installed
  * If you don't have `node` installed, you can pick the way that best works for you from [this gist](https://gist.github.com/isaacs/579814).
  * If you don't know whether you have `node` installed or not, you can run `node -v`. If you see a version number as an output, you are good to go. Otherwise, follow one of the steps above to install `node` on your machine.
* You have `ember-cli` installed globally
  * If you don't have `ember-cli` installed, run `npm install -g ember-cli`. Note that `node` comes with `npm` so you don't have to install `npm` separately.
  * If you don't know if you have `ember-cli` installed, run `ember -v`. If you see a version number as an output, you are good to go. Otherwise, follow one of the steps above to install `ember-cli` on your machine.
* You have `bower` installed globally
  * If you don't have `bower` installed, run `npm install -g bower`.
  * If you don't know if you have `bower` installed, run `bower -v`. If you see a version number as an output, you are good to go. Otherwise, follow one of the steps above to install `bower` on your machine.

## Making Changes

Once the above [Prerequisites][] are satisfied and you have discussed the changes you want to make in an issue, you are ready to get started coding. The steps to making changes are as follows.

1. [Clone](https://help.github.com/articles/cloning-a-repository/) the fork you created as a part of [Getting Started][].
2. `cd` into your cloned repository on your machine.
3. Run `npm install && bower install` to install dependencies.
4. Run `npm test` to make sure the tests are passing before you start making your changes.
5. Create a topic branch from `master`. Run `git checkout -b [name of your branch]`. Please avoid working directly on the master branch.
6. Make commits of logical units. Check for unnecessary whitespace with `git diff --check` before committing.

## Submitting Changes

1. Once you have the changes working and in the state you are ready to submit, push your changes. Run `git push origin head` (this assumes you are working in a topic branch and have all the changes committed).
2. Submit a [pull request](https://help.github.com/articles/creating-a-pull-request/).

There might be further changes necessary based on feedback you receive on the pull request. Feel free to ask clarifying questions or seek guidance as necessary. We hope that your contributor experience is as pleasant/smooth as can be and following these guidelines will help ensure that. Thanks for helping out!
