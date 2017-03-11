'use strict';
var commentStyles = require('./comment-styles');

function expandObject(object) {
  var keys = Object.keys(object);
  for (var i = 0; i < keys.length; ++i) {
    var key = keys[i];
    var subkeys = key.split(/,\s?/);
    var target = object[key];
    delete object[key];
    subkeys.forEach(function(key) { object[key] = target; })
  }
  return object;
}

commentStyles = expandObject(commentStyles);

function makeBlockComment(comment, fileExtension) {
  const startComment = commentStyles[fileExtension]['start'];
  const endComment = commentStyles[fileExtension]['end'];
  if (startComment && endComment) {
    return startComment + '\n' + comment + '\n' + endComment;
  } else {
    throw new Error('Block comments not available for', fileExtension, 'files.');
  }
}

function makeInlineComment(comment, fileExtension) {
  const inlineComment = commentStyles[fileExtension]['inline'];
  const lines = comment.split('\n');
  if (inlineComment) {
    return lines.map(function(line) {
      return inlineComment + line;
    }).join('\n');
  } else {
    throw new Error('Inline comments not available for', fileExtension, 'files.');
  }
}

module.exports = {
  makeBlockComment: makeBlockComment,
  makeInlineComment: makeInlineComment
};
