'use strict';

/**
 * If a node represents call expression for the named function.
 * @param {!AST.Node} node The node.
 * @param {string} name The function name.
 * @return {boolean}
 */
function isCallExpression(node, name) {
  if (!node || !node.expression || node.expression.type !== 'CallExpression' || !node.expression.callee) {
    return false;
  }

  const parts = name.split('.');
  let next = node.expression.callee;
  while (next && parts.length) {
    const nextName = parts.pop();
    // node for the expression root is an Identifier, the rest are MemberExpression nodes
    const testNode = parts.length ? next.property : next;
    if (!testNode || testNode.type !== 'Identifier' || testNode.name !== nextName) {
      return false;
    }
    next = next.object;
  }

  // passes if all parts were found
  return !parts.length;
}

/**
 * @param {!AST.Node} node The node
 * @return {boolean} Whether or not the statement is a goog.module call
 */
exports.isModuleStatement = function(node) {
  return isCallExpression(node, 'goog.module');
};

/**
 * @param {!AST.Node} node The node
 * @return {boolean} Whether or not the statement is a goog.declareModuleId call
 */
exports.isDeclareModuleIdStatement = function(node) {
  return isCallExpression(node, 'goog.declareModuleId');
};

/**
 * @param {!AST.Node} node The node
 * @return {boolean} Whether or not the statement is a goog.module.declareLegacyNamespace call
 */
exports.isLegacyNamespaceStatement = function(node) {
  return isCallExpression(node, 'goog.module.declareLegacyNamespace');
};

/**
 * @param {!AST.Node} node The node
 * @return {boolean} Whether or not the statement is a goog.provide call
 */
exports.isProvideStatement = function(node) {
  return isCallExpression(node, 'goog.provide');
};

/**
 * @param {!AST.Node} node The node
 * @return {boolean} Whether or not the statement is a goog.require call
 */
exports.isRequireStatement = function(node) {
  return isCallExpression(node, 'goog.require');
};
