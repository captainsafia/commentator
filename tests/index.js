'use strict';

const chai = require('chai');
const expect = chai.expect;
const commentator = require('../src');

describe('makeBlockComment()', function() {
  it('returns a JavaScript block comment', function() {
    const comment = 'This is a test\nof block comments\nmade via commentator.';
    const extension = 'js';
    const expected = '/*\nThis is a test\nof block comments\nmade via commentator.\n*/';
    expect(commentator.makeBlockComment(comment, extension)).to.equal(expected);
  });
  it('returns a Python block comment', function() {
    const comment = 'This is a test\nof block comments\nmade via commentator.';
    const extension = 'py';
    const expected = '"""\nThis is a test\nof block comments\nmade via commentator.\n"""';
    expect(commentator.makeBlockComment(comment, extension)).to.equal(expected);
  });
  it('throws an error for unsupported languages', function() {
    const comment = 'This is a test\nof block comments\nmade via commentator.';
    const extension = 'rs';
    expect(function() {
      commentator.makeBlockComment(comment, extension)
    }).to.throw(/not available/);
  });
});

describe('makeInlineComent()', function() {
  it('returns a JavaScript inline comment', function() {
    const comment = 'This is a test\nof block comments\nmade via commentator.';
    const extension = 'js';
    const expected = '// This is a test\n// of block comments\n// made via commentator.';
    expect(commentator.makeInlineComment(comment, extension)).to.equal(expected);
  });
  it('returns a Python inline comment', function() {
    const comment = 'This is a test\nof block comments\nmade via commentator.';
    const extension = 'py';
    const expected = '# This is a test\n# of block comments\n# made via commentator.';
    expect(commentator.makeInlineComment(comment, extension)).to.equal(expected);
  });
});
