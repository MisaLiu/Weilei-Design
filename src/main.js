import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import Router from 'vue-router'
import router from './route.js'


Vue.config.productionTip = false
Vue.use(Router)


new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
