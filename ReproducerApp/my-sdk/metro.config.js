/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const {
  transformerOptions,
  extraNodeModules,
  watchFolders,
} = require('../common.metro.config');

module.exports.resetCache = true;
module.exports.resolver = extraNodeModules;
module.exports.watchFolders = watchFolders;
module.exports.transformer = transformerOptions;
