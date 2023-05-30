const Image = require('@11ty/eleventy-img');

module.exports = async function imageShortcode(src, opts = {}) {
  const defaults = {
    alt: "",
    classes: "",
    widths: [null],
    sizes: "(min-width: 30em) 50vw, 100vw"
  }

  const config = { ...defaults, ...opts };
  
  const options = {
    widths: config.widths || [null],
    formats: ['webp', 'jpg'],
    urlPath: '/img/built/',
    outputDir: '_site/img/built',
    cacheOptions: {
      duration: "*",
      directory: ".cache",
      removeUrlQueryParams: false,
    }
  };

  let imageAttributes = {
    alt: config.alt,
    loading: config.loading || 'lazy',
    decoding: 'async',
    sizes: config.sizes || '100vw',
    class: config.classes,
  };

  let metadata = await Image(`src${src}`, options);

  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
  return Image.generateHTML(metadata, imageAttributes);
};
