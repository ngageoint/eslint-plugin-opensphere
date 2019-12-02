'use strict';

module.exports = {
  rules: {
    'modules-first': require('./modules-first').rule,
    'no-duplicate-requires': require('./no-duplicate-requires').rule,
    'no-suppress': require('./no-suppress').rule,
    'provides-first': require('./provides-first').rule,
    'provides-sorted': require('./provides-sorted').rule,
    'requires-first': require('./requires-first').rule,
    'require-jsdoc': require('./require-jsdoc').rule,
    'requires-sorted': require('./requires-sorted').rule,
    'single-module': require('./single-module').rule
  }
};
