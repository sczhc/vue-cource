// const BASE_URL = process.env.NODE_ENV === 'procution' ? '/iview-admin/' : '/'
const path = require('path');
const resolve = dir => path.join(__dirname, dir)

module.exports = {
  // 关闭eslint
  lintOnSave: false,

  // 默认路径
  // baseUrl: undefined,

  // baseUrl: BASE_URL,
  chainWebpack: config => {
    // 别名
    config.resolve.alias
      .set('@', resolve('src'))
  },

  // 打包时不生成.map文件
  productionSourceMap: false,


  devServer: {
    // 指定要使用的主机,默认情况下这是localhost
    host: 'localhost',
    // 端口号
    port: '8081',
    // 服务器启动后打开浏览器。默认情况下禁用。
    open: false,
    // 跨域
    // proxy: 'http://localhost:3000'
  }
}
