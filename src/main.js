import Vue from 'vue'
import App from './App.vue'
import VueFire from 'vuefire'
import Vuelidate from 'vuelidate'
import EventBus from './plugins/event-bus'

Vue.use(VueFire)
Vue.use(Vuelidate)
Vue.use(EventBus)

new Vue({
  el: '#app',
  render: h => h(App)
})
