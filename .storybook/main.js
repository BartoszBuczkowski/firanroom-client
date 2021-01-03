const { TsConfigPathsPlugin } = require('awesome-typescript-loader');

module.exports = {
   stories: ['../src/components/**/*.stories.@(js|jsx|ts|tsx)'],
   addons: ['@storybook/addon-actions', '@storybook/addon-links', '@storybook/addon-essentials'],
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
         '@pages/*': ['src/components/pages/*'],
         '@templates/*': ['src/components/templates/*'],
         '@styles/*': ['styles/templates/*'],
      },
   },
   webpackFinal: async (config) => {
      config.resolve.extensions.push('.ts', '.tsx');

      config.resolve.plugins.push(new TsConfigPathsPlugin());

      return config;
   },
};
