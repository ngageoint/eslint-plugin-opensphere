'use strict';

const util = require('./util');

exports.rule = {
  meta: {
    docs: {
      description: 'require that all goog.module() files contain a single module',
      category: 'Closure Compiler'
    }
  },

  create: function(context) {
    return {
      Program: function(program) {
        let moduleSeen = false;

        program.body.forEach((statement) => {
          if (util.isModuleStatement(statement)) {
            if (!moduleSeen) {
              moduleSeen = true;
            } else {
              return context.report(statement, 'Expected a single goog.module() statement');
            }
          }
        });
      }
    };
  }
};
