const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@Src': 'src',
    '@Pages': 'src/pages',
    '@Views': 'src/views',
    '@Services': 'src/services',
    '@Common': 'src/common',
  })(config);

  return config;
};
