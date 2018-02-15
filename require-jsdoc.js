/**
 * @fileoverview This rule specifically checks for JSDoc on FunctionExpressions
 *    occurring withing AssignmentExpressions.
 *
 * @example
 *   goog.provide('os.test');
 *   os.test.doSomething = function(item) { // <-- no docs!
 *     // ...
 *   };
 */
"use strict";

var original = require('eslint/lib/rules/require-jsdoc');

// just extend the original rule
var originalCreate = original.create;

original.create = function(context) {
  var rule = originalCreate(context);
  var check = rule.FunctionDeclaration;
  var old = rule.FunctionExpression;

  rule.FunctionExpression = function(node) {
    if (node.parent.type === 'AssignmentExpression') {
      check(node);
    }

    old(node);
  }

  return rule;
}

exports.rule = original;
