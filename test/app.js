'use strict';

var will = require('willy').will;
var app = require('../app.js');

describe('sanity', function () {
  it('should load', function () {
    will(app).exist();
  });
});

describe('matching by class', function () {
  it('should work for a single class', function () {
    will(app('.foo')).be('[contains(concat(" ", normalize-space(@class), " "), " foo ")]');
  });

  it('should work for multiple classes', function () {
    will(app('.foo.bar')).be('[contains(concat(" ", normalize-space(@class), " "), " foo ") and contains(concat(" ", normalize-space(@class), " "), " bar ")]');
  });
});
