const Image = require('@11ty/eleventy-img');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(require('@11ty/webc'));
  eleventyConfig.addPassthroughCopy('admin');
  eleventyConfig.addPassthroughCopy('public');
  eleventyConfig.addPassthroughCopy('content');

  eleventyConfig.addShortcode('image', async (src, alt, sizes) => {
    let metadata = await Image(src, {
      widths: [300, 600],
      formats: ['jpeg'],
      outputDir: './_site/images',
      urlPath: '/images/',
    });

    let imageAttributes = {
      alt,
      sizes,
      loading: 'lazy',
      decoding: 'async',
    };

    return Image.generateHTML(metadata, imageAttributes);
  });

  return {
    dir: {
      input: 'content',
      includes: '../src/templates',
      output: '_site',
    },
  };
};
