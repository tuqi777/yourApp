import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'

const firstPageX = {
  state: {
    token: 'adsas',
    userInfo:{}
  },
  mutations: {
    ...mutations
  },
  getters: {
    ...getters
  }
}
export default firstPageX