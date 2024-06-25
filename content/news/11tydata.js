module.exports = {
  layout: 'layout.njk',
  tags: ['news'],
  eleventyComputed: {
    permalink: (data) => `news/${data.page.fileSlug}.html`,
  },
};
