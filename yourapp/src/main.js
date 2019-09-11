import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store'
import mixin from './mixins'
import '@/assets/theme/element-variables.scss'
import '@/plugins/elementui'

import '@/assets/css/common.css'
import '@/assets/css/reset-element.css'

// Vue.use(Element)
Vue.use(mixin)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
