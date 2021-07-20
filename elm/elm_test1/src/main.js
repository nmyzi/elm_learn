// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'E:\\vscodeTest\\elm_test1\\config\\rem.js' 
import Resource from 'vue-resource'
import Mint from 'mint-ui';
import {store} from './store/store'
import Icon from 'vue-svg-icon/Icon.vue'
Vue.use(Resource)
Vue.use(Mint)
Vue.component('icon', Icon)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store:store,//使用store
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
