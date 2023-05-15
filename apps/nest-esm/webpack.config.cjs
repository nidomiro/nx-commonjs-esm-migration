const { composePlugins, withNx } = require('@nrwl/webpack');
const util = require('util');
const nodeExternals = require('webpack-node-externals');

// Nx plugins for webpack.
const configFunc = composePlugins(withNx(), (config) => {
  // Update the webpack config as needed here.
  // e.g. `config.plugins.push(new MyPlugin())`
  config.resolve.extensionAlias = {
    ...config.resolve.extensionAlias,
    '.js': ['.ts', '.js'],
    '.mjs': ['.mts', '.mjs'],
  };
  return config;
});

const configFuncWithOverrides = (config, ctx) => {
  return configFunc(config, ctx).then((config) => {
    /*
    Changes here copied from https://github.com/nrwl/nx/issues/7872#issuecomment-997460397
    */
    config.externalsPresets = {
      node: true,
    };

    config.output = {
      ...config.output,
      module: true,
      libraryTarget: 'module',
      chunkFormat: 'module',
      library: {
        type: 'module'
      },
      environment: {
        module: true
      }
    }

    config.experiments = {
      outputModule: true
    }

    config.externals = nodeExternals({
      importType: 'module'
    })

  return config

  });
}

module.exports = configFuncWithOverrides;
