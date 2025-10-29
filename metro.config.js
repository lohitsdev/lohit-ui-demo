const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Watch parent directory
config.watchFolders = [path.resolve(__dirname, '..')];

// Configure node_modules resolution
config.resolver.nodeModulesPaths = [
  path.resolve(__dirname, 'node_modules'),
  path.resolve(__dirname, '../node_modules'),
];

module.exports = config;

