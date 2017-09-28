import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import resource from './js/vue-resource'


Vue.use(resource)
window.bus = new Vue()

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
