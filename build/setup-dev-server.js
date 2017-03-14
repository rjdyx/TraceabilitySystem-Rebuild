const path = require('path')
const webpack = require('webpack')
const projectRoot = path.resolve(__dirname, '../')
const clientConfig = require('./webpack.client.config')



module.exports = function setupDevServer (app, opts) {
  // 修改clientConfig使其能够进行热加载
  clientConfig.entry.app = ['webpack-hot-middleware/client', clientConfig.entry.app]
  clientConfig.output.filename = '[name].bundle.js'
  clientConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  )

  // dev middleware
  const clientCompiler = webpack(clientConfig)
  const devMiddleware = require('webpack-dev-middleware')(clientCompiler, {
    publicPath: clientConfig.output.publicPath,
    stats: {
      colors: true,
      chunks: false
    }
  })
  app.use(devMiddleware)
  clientCompiler.plugin('done', () => {
    const fs = devMiddleware.fileSystem
    const filePath = projectRoot + '/dist/index.html'
    if (fs.existsSync(filePath)) {
      const index = fs.readFileSync(filePath, 'utf-8')
      opts.indexUpdated(index)
    }
  })

  // hot middleware
  app.use(require('webpack-hot-middleware')(clientCompiler))

}
