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
  'hs, lhs, purs': {
    start: '{-',
    end: '-}',
    inline: '--'
  },
  'sql': {
    inline: '--'
  },
  'rs': {
    inline: '//'
  },
  'html, xml': {
    start: '<!--',
    end: '-->',
  },
  'bash, ksh, mksh, csh, tsh, sh, nginx': {
    inline: '#'
  },
  'scm, rkt, clj, lisp, cl': {
    inline: ';'
  },
  'powershell': {
    start: '<#',
    end: '#>',
    inline: '#'
  }
};

module.exports = commentStyles;
