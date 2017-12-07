'use strict';

exports.rule = {
  meta: {
    docs: {
      description: 'disallow suppressing compiler warnings/errors with @suppress',
      category: 'Closure Compiler'
    }
  },

  schema: [
    {
      type: 'array',
      items: {
        type: 'string'
      }
    }
  ],

  create: function(context) {
    const sourceCode = context.getSourceCode();
    const blacklistedTypes = context.options[0] || undefined;

    /**
     * Reports a given comment if it contains blocked suppress types.
     * @param {ASTNode} node A comment node to check.
     */
    function checkCommentForSuppress(node) {
      // Skip if types aren't provided or the comment is empty.
      if (!node || !node.value || node.value.length === 0) {
        return;
      }

      const match = node.value.match(/@suppress \{(.*?)\}/);
      if (match && match.length === 2) {
        if (!blacklistedTypes || blacklistedTypes.length === 0) {
          // Array is not present or empty, so block all types.
          context.report(node, '@suppress not allowed for any types');
        } else {
          // Report which matched types are blocked.
          const matched = [];
          const types = match[1].split('|');
          types.forEach(function(type) {
            if (blacklistedTypes.indexOf(type) !== -1 && matched.indexOf(type) === -1) {
              matched.push(type);
            }
          });

          if (matched.length > 0) {
            const typeString = matched.join(', ');
            context.report(node, `@suppress not allowed for: ${typeString}`);
          }
        }
      }
    }

    return {
      Program() {
        // The compiler will only handle @suppress in block comments.
        const comments = sourceCode.getAllComments();
        comments.filter((token) => token.type === 'Block').forEach(checkCommentForSuppress);
      }
    };
  }
};
