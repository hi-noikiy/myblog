const mix = require('laravel-mix')
// 得到package.json中的参数 --env.admin 转换成 一个对象 {admin: true}
const { env } = require('minimist')(process.argv.slice(2))

// 判断如果是admin那就执行 webpack.admin.js 构建后台项目，构建之后return就不会往下执行了
if (env && env.admin) {
  require(`${__dirname}/webpack.admin.js`)
  return
}

// 前台项目的构建规则
if (mix.inProduction()) {
  mix.version()
}

mix.webpackConfig({
  output: {
    publicPath: '/frontend/', // 设置默认打包目录
    chunkFilename: `js/[name].${mix.inProduction() ? '[chunkhash].' : ''}js` // 路由懒加载的时候打包出来的js文件
  }
})

mix.js('resources/frontend/assets/js/app.js', 'public/frontend/js')
  .sass('resources/frontend/assets/sass/app.scss', 'public/frontend/css')
  .extract(['vue'])
  .setResourceRoot('/frontend/') // 设置资源目录
  .setPublicPath('public/frontend/') // 设置资源目录
