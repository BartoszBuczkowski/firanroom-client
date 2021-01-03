const { TsConfigPathsPlugin } = require('awesome-typescript-loader');
const path = require('path');

module.exports = {
   stories: ['../src/components/**/*.stories.mdx', '../src/components/**/*.stories.@(js|jsx|ts|tsx)'],
   addons: ['@storybook/addon-docs', '@storybook/addon-links', '@storybook/addon-essentials'],
   typescript: {
      reactDocgen: 'react-docgen-typescript',
      reactDocgenTypescriptOptions: {
         compilerOptions: {
            allowSyntheticDefaultImports: false,
            esModuleInterop: false,
         },
      },
      baseUrl: '.',
      paths: {
         '@atoms/*': ['src/components/atoms/*'],
         '@molecules/*': ['src/components/molecules/*'],
         '@organisms/*': ['src/components/organisms/*'],
         '@pages/*': ['./components/pages/*'],
         '@templates/*': ['src/components/templates/*'],
      },
   },
   webpackFinal: async (config) => {
      config.resolve.extensions.push('.ts', '.tsx');

      config.resolve.plugins.push(new TsConfigPathsPlugin());

      return config;
   },
};
