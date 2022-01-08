module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo',
      ['@babel/preset-env', {targets: {node: 'current'}}],
      '@babel/preset-typescript',
    ],
    plugins: [
      ['@babel/plugin-proposal-private-property-in-object', {loose: true}],
      ['module:react-native-dotenv'],
    ],
  };
};