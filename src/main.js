import Vue from 'vue'
import App from './App.vue'
import VueFire from 'vuefire'
import Vuelidate from 'vuelidate'
import EventBus from './plugins/event-bus'
import VueRouter from 'vue-router'
import Contatos from './Contatos'

Vue.use(VueFire)
Vue.use(Vuelidate)
Vue.use(EventBus)
Vue.use(VueRouter)

const routes = [
  {path: '/', component: App},
  {path: '/contatos', component: Contatos}
]

const router = new VueRouter({
  routes
});

const app = new Vue({
  router
}).$mount('#app')
// router.start(App, '#app');
// new Vue({
//   el: '#app',
//   render: h => h(App)
// })
