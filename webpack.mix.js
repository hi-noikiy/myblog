const mix = require('laravel-mix')
const { env } = require('minimist')(process.argv.slice(2))
if (env && env.admin) {
  require(`${__dirname}/webpack.admin.js`)
  return
}

mix.js('resources/frontend/assets/js/app.js', 'public/js')
  .sass('resources/frontend/assets/sass/app.scss', 'public/css')
  .extract(['vue'])
if (mix.inProduction()) {
  mix.version()
}
