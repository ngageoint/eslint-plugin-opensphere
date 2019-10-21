'use strict';

/**
 * If a node represents a goog call expression.
 * @param {!AST.Node} node The node.
 * @param {string} name The name.
 * @return {boolean}
 */
function isGoogCallExpression(node, name) {
  const callee = node.callee;
  return callee && callee.type === 'MemberExpression' &&
      callee.object.type === 'Identifier' && callee.object.name === 'goog' &&
      callee.property.type === 'Identifier' && !callee.property.computed &&
      callee.property.name === name;
}

/**
 * If a node represents a goog statement.
 * @param {!AST.Node} node The node.
 * @param {string} name The name.
 * @return {boolean}
 */
function isGoogStatement(node, name) {
  return node.expression && node.expression.type === 'CallExpression' &&
    isGoogCallExpression(node.expression, name);
}

/**
 * @param {!AST.Node} node The node
 * @return {boolean} Whether or not the expression is a goog.provide call
 */
exports.isProvideExpression = function(node) {
  return isGoogCallExpression(node, 'provide');
};

/**
 * @param {!AST.Node} node The node
 * @return {boolean} Whether or not the statement is a goog.module call
 */
exports.isModuleStatement = function(node) {
  return isGoogStatement(node, 'module');
};

/**
 * @param {!AST.Node} node The node
 * @return {boolean} Whether or not the statement is a goog.provide call
 */
exports.isProvideStatement = function(node) {
  return isGoogStatement(node, 'provide');
};

/**
 * @param {!AST.Node} node The node
 * @return {boolean} Whether or not the expression is a goog.require call
 */
exports.isRequireExpression = function(node) {
  return isGoogCallExpression(node, 'require');
};

/**
 * @param {!AST.Node} node The node
 * @return {boolean} Whether or not the statement is a goog.require call
 */
exports.isRequireStatement = function(node) {
  return isGoogStatement(node, 'require');
};

/**
 * @param {!AST.Node} node The node
 * @return {string}
 */
var getName = exports.getName = function(node) {
  if (node.type !== 'MemberExpression') {
    return;
  }
  if (node.property.type !== 'Identifier' || node.property.computed) {
    return;
  }
  let objectName;
  if (node.object.type === 'Identifier' && !node.object.computed) {
    objectName = node.object.name;
  } else if (node.object.type === 'MemberExpression' && !node.object.computed) {
    objectName = getName(node.object);
  }
  if (!objectName) {
    return;
  }
  return `${objectName}.${node.property.name}`;
};
