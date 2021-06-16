const withNextra = require('nextra')('nextra-theme-docs', './theme.config.js');
module.exports = {
  distDir: 'build',
  target: 'serverless',
  ...withNextra(),
};
