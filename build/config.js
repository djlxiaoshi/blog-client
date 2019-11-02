const path = require('path');

module.exports = {
  basePath: '',
  resolve: (...rest) => path.resolve(...rest),
  join: (...rest) => path.join(...rest),
  posixJoin: (...rest) => path.posix.join(...rest)
};
