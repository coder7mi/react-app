const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/api', //表示以api开头的请求，服务器以配置的target域名发请求
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeorigin: true
    })
  )
}
