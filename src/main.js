import Vue from 'vue'
import App from './App.vue'
import VueFire from 'vuefire'
import Vuelidate from 'vuelidate'

Vue.use(VueFire)
Vue.use(Vuelidate)

new Vue({
  el: '#app',
  render: h => h(App)
})
