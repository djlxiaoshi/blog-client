/**
 * 生成数据源
 */
const path = require('path');
const fs = require('fs');
const basePath = './data';
const mockDataDirPath = path.join(__dirname, basePath);
const files = fs.readdirSync(mockDataDirPath);
const database = {};

files.forEach(function (filepath) {
  const mock = require(path.resolve(mockDataDirPath, filepath));

  Object.assign(database, mock());
});

module.exports = function () {
  return database;
};
