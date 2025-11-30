const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Optimize Metro bundler for mobile platforms only
config.resolver.platforms = ['ios', 'android', 'native'];
config.resolver.sourceExts.push('cjs');
config.resolver.sourceExts.push('mjs');

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
