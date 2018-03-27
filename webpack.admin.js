const mix = require('laravel-mix')

mix.webpackConfig({
  output: {
    publicPath: '/back/',
    chunkFilename: `js/[name].${mix.inProduction() ? '[chunkhash].' : ''}js`
  }
})
mix.setResourceRoot('/back/')
mix.js('resources/admin/assets/js/app.js', 'public/back/js')
  .sass('resources/admin/assets/sass/app.scss', 'public/back/css')
  .extract(['vue', 'iview', 'vue-router', 'axios'])
  .setPublicPath('public/back/')
if (mix.inProduction()) {
  mix.version()
}
