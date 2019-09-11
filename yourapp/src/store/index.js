import Vue from 'vue'
import Vuex from 'vuex'
import firstPageX from './modules/firstPage'
const modules = {

}

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: 'asddsadsadsasdassd',
    userInfo: {
      name:'你的名字'
    }
  },
  getters: {},
  actions: {},
  mutations: {
    setToken(state, token) {
      if (!token) {
        window.sessionStorage.setItem('token',token)
      } else {
        window.sessionStorage.removeItem('token')
      }
      state.token = token
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    }
  },
  modules: {
    firstPageX
  }
})