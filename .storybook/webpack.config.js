const path = require('path')

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
   // Remove the existing css rule
   config.module.rules = config.module.rules.filter((f) => f.test.toString() !== '/\\.scss$/')

   config.module.rules.push({
      test: /\.scss$/,
      loaders: ['css-loader', 'postcss-loader'],
      include: path.resolve(__dirname, '../'),
   })

   return config
}
