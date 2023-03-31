/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const path = require("path");

const extraNodeModules = {
  common: path.resolve(__dirname + "/../"),
};
const watchFolders = [path.resolve(__dirname + "/../")];

const transformerOptions = {
  getTransformOptions: async () => ({
    transform: {
      experimentalImportSupport: false,
      inlineRequires: true,
    },
  }),
  minifierPath: "metro-minify-obfuscator", // <- add this
  minifierConfig: {
    //`defaultMinifierPath` required if filter/includeNodeModules options is set,
    // can be metro-minify-uglify or metro-minify-terser dependes on RN version / available installed minifier
    defaultMinifierPath: "metro-minify-uglify",
    filter: (filename) => true, // return true to obfuscate
    includeNodeModules: false, // set false to ignore node_modules from obfuscation
    trace: true, // show output log
    obfuscatorOptions: {
      // put additional javscript-obfuscator configuration here
      log: true,
      disableConsoleOutput: false, // TODO Not working: investigate
      // sourceMap: true, // default true
      // sourceMapMode: 'separate', // can also be 'inline' (see documentation)
    },
  },
};

module.exports = { transformerOptions, extraNodeModules, watchFolders };
