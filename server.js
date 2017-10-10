"use strict"
process.env.VUE_ENV = 'server'
const isProd = process.env.NODE_ENV === 'production'

const fs = require('fs')
const env = require('./env')
const path = require('path')
const express = require('express')
const favicon = require('serve-favicon')
const compression = require('compression')  // 用于压缩response的中间件
const proxyMiddleware = require('http-proxy-middleware')  // http代理中间件
const resolve = file => path.resolve(__dirname, file)

const app = express()

let indexHTML = '' // html-webpack-plugin生成的html
if (isProd) {
    // 作业模式下: 通过真实的fs生成html
    indexHTML = fs.readFileSync(resolve('./dist/index.html'), 'utf-8')
} else {
  // 开发模式下: 配置开发模式的热加载
    require('./build/setup-dev-server')(app, {
        indexUpdated: index => {
            indexHTML = index
        }
    })
}

// proxy
const proxyTable = ['/images/upload/**', '/token', '/api/**', '/wap/**', '/teaTrace/**', '/login', '/logout', '/kit', '/kit-check', '/video/**']
const options = {target: env.app_url, changeOrigin: true}
proxyTable.forEach(function (context) {
    app.use(proxyMiddleware(context, options))
})
// 压缩response
app.use(compression({ threshold: 0 }))
// 使用Expires headers
const serveCache = (path, cache) => express.static(resolve(path), {
    maxAge: 315360000
})
const serveNoCache = (path, cache) => express.static(resolve(path))
app.use(favicon('./public/suyulogo.png'))
app.use('/public', serveCache('./public'))
app.use('/dist', serveNoCache('./dist'))

app.get(['/webapp', '/webapp/**', '/'], (req, res) => {
    res.setHeader('Content-Type', 'text/html')
    const s = Date.now()
    res.end(indexHTML)
    console.log(`whole request: ${Date.now() - s}ms`)
})

const port = process.env.PORT || env.app_port
app.listen(port, () => {
    console.log(`server started at localhost:${port}`)
})
