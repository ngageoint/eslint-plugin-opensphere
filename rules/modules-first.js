'use strict';

const util = require('./util');

exports.rule = {
  meta: {
    docs: {
      description: 'require that all goog.module() precede other statements',
      category: 'Closure Compiler'
    }
  },

  create: function(context) {
    return {
      Program: function(program) {
        let otherSeen = false;

        program.body.forEach((statement) => {
          if (!util.isModuleStatement(statement)) {
            otherSeen = true;
          } else if (otherSeen) {
            return context.report(statement, 'Expected goog.module() to precede other statements');
          }
        });
      }
    };
  }
};
