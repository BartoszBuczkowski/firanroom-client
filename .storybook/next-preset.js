const path = require('path')

module.exports = {
   webpackFinal: async (baseConfig, options) => {
      const { module = {} } = baseConfig
      const newConfig = {
         ...baseConfig,
         module: {
            ...module,
            rules: [...(module.rules || [])],
         },
      }

      newConfig.resolve.alias['@/assets'] = path.resolve(__dirname, '../src/assets')
      newConfig.resolve.alias['@/atoms'] = path.resolve(__dirname, '../src/components/atoms')
      newConfig.resolve.alias['@/molecules'] = path.resolve(__dirname, '../src/components/molecules')
      newConfig.resolve.alias['@/organisms'] = path.resolve(__dirname, '../src/components/organisms')
      newConfig.resolve.alias['@/templates'] = path.resolve(__dirname, '../src/components/templates')
      newConfig.resolve.alias['@/styles'] = path.resolve(__dirname, '../src/styles')
      newConfig.resolve.alias['@/helpers'] = path.resolve(__dirname, '../src/helpers')
      newConfig.resolve.alias['@/utils'] = path.resolve(__dirname, '../src/utils')

      newConfig.module.rules = newConfig.module.rules.map((data) => {
         if (/svg\|/.test(String(data.test)))
            data.test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/
         return data
      })

      newConfig.module.rules.push({
         test: /\.(svg)$/i,
         use: [
            {
               loader: 'file-loader',
               options: {
                  limit: 8192,
               },
            },
         ],
      })

      newConfig.module.rules.push({
         test: /\.svg$/,
         include: path.resolve(__dirname, '../src/assets/svg-mod'),
         use: [
            {
               loader: '@svgr/webpack',
               options: {
                  svgoConfig: {
                     plugins: [
                        {
                           removeDimensions: true,
                           removeViewBox: false,
                           removeAttrs: {
                              attrs: '(fill|stroke)',
                           },
                           addClassesToSVGElement: {
                              className: 'w-full h-full fill-current',
                           },
                        },
                     ],
                  },
               },
            },
         ],
      })
      newConfig.module.rules.push({
         test: /\.svg$/,
         exclude: path.resolve(__dirname, '../src/assets/svg'),
         use: ['@svgr/webpack'],
      })

      newConfig.module.rules.push({
         test: /\.(ts|tsx)$/,
         use: [
            {
               loader: require.resolve('awesome-typescript-loader'),
               options: {
                  configFileName: path.resolve(__dirname, './tsconfig.json'),
               },
            },
         ],
      })

      newConfig.resolve.extensions.push('.ts', '.tsx')

      newConfig.module.rules.find((rule) => rule.test.toString() === '/\\.css$/').exclude = /\.module\.css$/

      newConfig.module.rules.push({
         test: /\.module\.(css|scss)$/,
         include: path.resolve(__dirname, '../src'),
         use: [
            'style-loader',
            {
               loader: 'css-loader',
               options: {
                  modules: true,
               },
            },
            {
               loader: 'sass-loader',
            },
            {
               loader: 'postcss-loader',
            },
         ],
      })

      return newConfig
   },
}
