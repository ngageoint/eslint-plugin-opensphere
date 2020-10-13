## [2.4.1](https://github.com/ngageoint/eslint-plugin-opensphere/compare/v2.4.0...v2.4.1) (2020-10-13)


### Bug Fixes

* don't attempt to determine if a typedef is referenced locally ([e163f18](https://github.com/ngageoint/eslint-plugin-opensphere/commit/e163f18d1c299cc3ffde46a5c4d1ee07c4d32d32))

# [2.4.0](https://github.com/ngageoint/eslint-plugin-opensphere/compare/v2.3.2...v2.4.0) (2020-09-22)


### Features

* detect variable use as a jsdoc type ([150262e](https://github.com/ngageoint/eslint-plugin-opensphere/commit/150262eb5a9b772aff65c517c1bc86bdf9408f61))
* verify the var is a typedef ([1290c43](https://github.com/ngageoint/eslint-plugin-opensphere/commit/1290c43081893aada055f27480ed7f6278518634))

## [2.3.2](https://github.com/ngageoint/eslint-plugin-opensphere/compare/v2.3.1...v2.3.2) (2020-02-10)


### Bug Fixes

* verify node type before referencing node-specific properties ([c04098e](https://github.com/ngageoint/eslint-plugin-opensphere/commit/c04098e4108409ca585eddf17a27acf52835a3d7))

## [2.3.1](https://github.com/ngageoint/eslint-plugin-opensphere/compare/v2.3.0...v2.3.1) (2019-12-10)


### Bug Fixes

* **eslint:** eslint is now a direct dependency ([e4df737](https://github.com/ngageoint/eslint-plugin-opensphere/commit/e4df737c6212d63699376d7d7b4bdd5adc8cc73f))

# [2.3.0](https://github.com/ngageoint/eslint-plugin-opensphere/compare/v2.2.0...v2.3.0) (2019-12-10)


### Features

* allow goog.requireType in custom no-unused-vars ([90825b1](https://github.com/ngageoint/eslint-plugin-opensphere/commit/90825b195e571abc70bb55ad52ce271e8c85c561))
* suggest goog.requireType when assignment is from goog.require ([151ee7e](https://github.com/ngageoint/eslint-plugin-opensphere/commit/151ee7efb813b4310ef05833429c61e67afad940))

# [2.2.0](https://github.com/ngageoint/eslint-plugin-opensphere/compare/v2.1.0...v2.2.0) (2019-12-02)


### Features

* **goog:** add rules for goog.module and refactor call detection ([2e7758d](https://github.com/ngageoint/eslint-plugin-opensphere/commit/2e7758d4eca2242b31e7a37c2361de2a4f9eec02))

# [2.1.0](https://github.com/ngageoint/eslint-plugin-opensphere/compare/v2.0.1...v2.1.0) (2019-10-21)


### Features

* **goog:** allow goog.module statements to precede goog.require ([8580945](https://github.com/ngageoint/eslint-plugin-opensphere/commit/8580945a5680ef3e08ad37c5e3de4b3bd8cbd014))

## [2.0.1](https://github.com/ngageoint/eslint-plugin-opensphere/compare/v2.0.0...v2.0.1) (2019-07-05)


### Bug Fixes

* **release:** force release ([51fd9a7](https://github.com/ngageoint/eslint-plugin-opensphere/commit/51fd9a7))

<a name="2.0.0"></a>
# [2.0.0](https://github.com/ngageoint/eslint-plugin-opensphere/compare/v1.0.0...v2.0.0) (2018-02-19)


### Features

* **require-jsdoc:** forces require-jsdoc on functions in assignments ([faa78cf](https://github.com/ngageoint/eslint-plugin-opensphere/commit/faa78cf))


### BREAKING CHANGES

* **require-jsdoc:** behavior in projects using require-jsdoc will change
