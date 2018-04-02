const mix = require('laravel-mix')

if (mix.inProduction()) {
  mix.version()
}

mix.webpackConfig({
  output: {
    publicPath: '/back/', // 设置默认打包目录
    chunkFilename: `js/[name].${mix.inProduction() ? '[chunkhash].' : ''}js` // 路由懒加载的时候打包出来的js文件
  }
})

mix.js('resources/admin/assets/js/app.js', 'public/back/js') // 打包后台js
  .sass('resources/admin/assets/sass/app.scss', 'public/back/css') // 打包后台css
  .extract(['vue', 'iview', 'vue-router', 'axios']) // 提取依赖库
  .setResourceRoot('/back/') // 设置资源目录
  .setPublicPath('public/back')
