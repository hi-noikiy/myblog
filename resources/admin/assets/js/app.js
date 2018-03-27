import './bootstrap'
import router from './router'
import store from './store'
import App from './App.vue'
import Vue from 'vue'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.use(iView)

/* eslint-disable */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
