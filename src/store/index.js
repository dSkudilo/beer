import { createStore } from 'vuex'
import profile from './module/profile.module'
import beer from './module/beer.module'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    profile,
    beer
  }
})
