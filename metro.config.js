const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Optimize Metro bundler
config.resolver.platforms = ['ios', 'android', 'native', 'web'];

// Reduce memory usage
config.transformer.minifierConfig = {
  keep_fnames: true,
  mangle: {
    keep_fnames: true,
  },
};

// Optimize file watching
config.watchFolders = [];

module.exports = config;
