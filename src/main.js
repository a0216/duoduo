import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import './assets/js/rem';
import 'lib-flexible/flexible.js';
import Swiper from 'swiper';
import store from './store'
import vueJsonp from 'vue-jsonp'
import BaiduMap from 'vue-baidu-map'



import 'swiper/css/swiper.min.css';
 

Vue.use(ElementUI);
Vue.use(vueJsonp)

Vue.use(BaiduMap, {
  /* 申请的百度密钥，可以在百度地图官网申请 */
  ak: "0TnE4S8HYgCDyG5iNOFnRUPQVbuYzNDC"
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
