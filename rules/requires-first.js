'use strict';

const util = require('./util');

exports.rule = {
  meta: {
    docs: {
      description: 'require that all goog.require() precede other statements (except goog.provide() and goog.module())',
      category: 'Closure Compiler'
    }
  },

  create: function(context) {
    return {
      Program: function(program) {
        let otherSeen = false;

        program.body.forEach((statement) => {
          if (util.isRequireStatement(statement)) {
            if (otherSeen) {
              return context.report(statement, 'Expected goog.require() to precede other statements');
            }
          } else if (!util.isProvideStatement(statement) && !util.isModuleStatement(statement) &&
              !util.isLegacyNamespaceStatement(statement) && !util.isDeclareModuleIdStatement(statement)) {
            otherSeen = true;
          }
        });
      }
    };
  }
};
