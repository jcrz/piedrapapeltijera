import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    puntos: 0
  },
  mutations: {
    aumentaPje(state) {
      state.puntos++
    },
    disminuyePje(state) {
      state.puntos--
    },
    reiniciar(state) {
      state.puntos = 0
    },
  }
})

new Vue({
  store,
  render: h => h(App),
  router,
}).$mount('#app')