import axios from '@/axios/api'
export default {
  namespaced: true,
  state () {
    return {
      beerData: {}
    }
  },
  mutations: {
    setBeerData (state, data) {
      state.beerData = data
    }
  },
  actions: {
    async getBeerData ({ commit }) {
      try {
        const { data } = await axios.get('beer/random_beer')
        commit('setBeerData', data)
      } catch (error) {
        console.log(error)
      }
    }
  },
  getters: {
    beerData (state) {
      return state.beerData
    }
  }
}
