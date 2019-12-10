'use strict';

const util = require('./util');

exports.rule = {
  meta: {
    docs: {
      description: 'require that all goog.provide() precede other statements',
      category: 'Closure Compiler'
    }
  },

  create: function(context) {
    return {
      Program: function(program) {
        let otherSeen = false;

        program.body.forEach((statement) => {
          if (!util.isProvideStatement(statement)) {
            otherSeen = true;
          } else if (otherSeen) {
            return context.report(statement, 'Expected goog.provide() to precede other statements');
          }
        });
      }
    };
  }
};
