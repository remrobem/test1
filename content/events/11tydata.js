module.exports = {
  layout: 'layout.njk',
  tags: ['events'],
  eleventyComputed: {
    permalink: (data) => `events/${data.page.fileSlug}.html`,
  },
};
