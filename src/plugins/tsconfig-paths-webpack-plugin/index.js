const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = function(context, options) {
  return {
    name: 'docusaurus-plugin-module-alias',
    configureWebpack(config, isServer) {
      return {
        resolve: {
          plugins: [new TsconfigPathsPlugin()]
        },
      };
    },
  };
};
