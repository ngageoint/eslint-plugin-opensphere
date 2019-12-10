'use strict';

module.exports = {
  rules: {
    'modules-first': require('./rules/modules-first').rule,
    'no-duplicate-requires': require('./rules/no-duplicate-requires').rule,
    'no-suppress': require('./rules/no-suppress').rule,
    'no-unused-vars': require('./rules/no-unused-vars'),
    'provides-first': require('./rules/provides-first').rule,
    'provides-sorted': require('./rules/provides-sorted').rule,
    'requires-first': require('./rules/requires-first').rule,
    'require-jsdoc': require('./rules/require-jsdoc').rule,
    'requires-sorted': require('./rules/requires-sorted').rule,
    'single-module': require('./rules/single-module').rule
  }
};
