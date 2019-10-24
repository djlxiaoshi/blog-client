const path = require('path');

module.exports = {
  basePath: '/',
  resolve: (...rest) => path.resolve(...rest),
  join: (...rest) => path.join(...rest),
};
