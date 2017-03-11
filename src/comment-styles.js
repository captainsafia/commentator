const commentStyles = {
  'cs, css, sass, mm, h, m, js, java, c, cpp, swift, php, go': {
    start: '/*',
    end: '*/',
    inline: '// ' 
  },
  'py': {
    start: '"""',
    end: '"""',
    inline: '# '
  },
  'rb': {
    start: '=begin',
    end: '=end',
    inline: '# '
  },
  'hs, lhs': {
    start: '{-',
    end: '-}',
    inline: '--'
  },
  'sql': {
    inline: '--'
  },
  'rs': {
    inline: '//'
  }
};

module.exports = commentStyles;
