import axios from '@/axios/api'
export default {
  namespaced: true,
  state () {
    return {
      profileData: {}
    }
  },
  mutations: {
    setProfileData (state, data) {
      state.profileData = data
    }
  },
  actions: {
    async getProfileData ({ commit }) {
      try {
        const { data } = await axios.get('users/random_user')
        commit('setProfileData', data)
      } catch (error) {
        console.log(error)
      }
    }
  },
  getters: {
    profileData (state) {
      return state.profileData
    }
  }
}
