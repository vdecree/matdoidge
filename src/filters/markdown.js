const markdownIt = require('markdown-it');

module.exports = function markdown(value) {
  if (value) {
    const mdIt = markdownIt({
      html: true,
      breaks: true,
      linkify: true,
    });

    return mdIt.render(value);
  }

  return '';
};
