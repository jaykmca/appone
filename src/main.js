import Vue from 'vue'
import App from './App.vue'

Vue.component("HelloWorld", () => import("apptwo/HelloWorld"))
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
