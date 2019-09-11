// import * as R from 'ramda'
import { mapGetters, mapMutations } from 'vuex'

export default {
  install (Vue) {
    Vue.mixin({
      data () {
        return {
          publicPath: process.env.BASE_URL,
          isCanRequest: true // 防止连续请求
        }
      },
      computed: {
        ...mapGetters([
          'token',
          'userInfo'
        ])
      },
      methods: {
        login () {
          this.$router.replace('/login')
        },
        ...mapMutations([
          'setToken'
        ])
      }
    })
  }
}
