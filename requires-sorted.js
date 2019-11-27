'use strict';

const util = require('./util');

exports.rule = {
  meta: {
    docs: {
      description: 'require that all goog.require() statements be in sorted order',
      category: 'Closure Compiler'
    }
  },

  create: function(context) {
    return {
      Program: function(program) {
        let firstRequire = undefined;
        let prevRequire = undefined;
        let isSorted = true;
        let otherSeen = false;

        program.body.forEach((statement) => {
          if (!isSorted || otherSeen) {
            // only report the first error and stop once a non-require is reached
            return;
          }

          if (util.isRequireStatement(statement)) {
            if (!firstRequire) {
              firstRequire = statement;
            }

            const expression = statement.expression;
            if (!expression.arguments[0]) {
              return;
            }

            const currRequire = expression.arguments[0].value;
            if (prevRequire && currRequire < prevRequire) {
              isSorted = false;
              return context.report(firstRequire, 'Expected goog.require() statements to be sorted');
            }

            prevRequire = currRequire;
          } else if (!util.isProvideStatement(statement) && !util.isModuleStatement(statement) &&
              !util.isLegacyNamespaceStatement(statement)) {
            otherSeen = true;
          }
        });
      }
    };
  }
};
