import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import '@/assets/scss/index.scss'
import store from './store'
Vue.config.productionTip = false
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
