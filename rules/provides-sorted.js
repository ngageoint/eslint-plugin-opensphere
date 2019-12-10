'use strict';

const util = require('./util');

exports.rule = {
  meta: {
    docs: {
      description: 'require that all goog.provide() statements be in sorted order',
      category: 'Closure Compiler'
    }
  },

  create: function(context) {
    return {
      Program: function(program) {
        let firstProvide = undefined;
        let prevProvide = undefined;
        let isSorted = true;
        let otherSeen = false;

        program.body.forEach((statement) => {
          if (!isSorted || otherSeen) {
            // only report the first error and stop once a non-provide is reached
            return;
          }

          if (util.isProvideStatement(statement)) {
            if (!firstProvide) {
              firstProvide = statement;
            }

            const expression = statement.expression;
            if (!expression.arguments[0]) {
              return;
            }

            const currProvide = expression.arguments[0].value;
            if (prevProvide && currProvide < prevProvide) {
              isSorted = false;
              return context.report(firstProvide, 'Expected goog.provide() statements to be sorted');
            }

            prevProvide = currProvide;
          } else {
            otherSeen = true;
          }
        });
      }
    };
  }
};
