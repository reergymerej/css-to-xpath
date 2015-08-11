'use strict';

var util = require('util');

var CLASS_REGEX = /\.[a-z-_]+/gi;

var hasClass = function (selector) {
  return util.format('contains(concat(" ", normalize-space(@class), " "), " %s ")', selector.replace(/^\./, ''));
};

var getNodeSelector = function (selector) {
  var selectors = [];
  var classMatches = selector.match(CLASS_REGEX) || [];

  classMatches.forEach(function (match) {
    selectors.push(hasClass(match));
  });

  return '[' + selectors.join(' and ') + ']';
};

var process = function (selector) {
  // TODO: split up and handle individual selectors
  return getNodeSelector(selector);
};

module.exports = process;
