// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'
import Icon from 'vue-svg-icon/Icon.vue'
import store from './store/index.js'
import 'babel-polyfill'

// 添加Fastclick移除移动端点击延迟
// eslint-disable-next-line import/no-duplicates
import FastClick from 'fastclick'
// FastClick的ios点击穿透解决方案
FastClick.prototype.focus = function (targetElement) {
  let length
  if (targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
    length = targetElement.value.length
    targetElement.focus()
    targetElement.setSelectionRange(length, length)
  } else {
    targetElement.focus()
  }
}
FastClick.attach(document.body)
Vue.component('icon', Icon)
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper /* { default global options } */)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
