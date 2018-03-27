const mix = require('laravel-mix')

mix.webpackConfig({
  output: {
    publicPath: '/admin/',
    chunkFilename: `js/[name].${mix.inProduction() ? '[chunkhash].' : ''}js`
  }
})
mix.setResourceRoot('/admin/')
mix.js('resources/admin/assets/js/app.js', 'public/admin/js')
  .sass('resources/admin/assets/sass/app.scss', 'public/admin/css')
  .extract(['vue', 'iview', 'vue-router', 'axios'])
  .setPublicPath('public/admin/')
if (mix.inProduction()) {
  mix.version()
}
