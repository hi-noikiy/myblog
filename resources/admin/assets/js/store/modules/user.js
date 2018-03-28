import router from '../../router'
import * as types from '../mutation-types'
import user from '../../api/user'
export default {
  state: {
    email: '',
    name: '',
    auth: false
  },
  mutations: {
    [types.LOGIN] (state, token) {
      state.auth = true
      localStorage.token = token
    },
    [types.PROFILE] (state, data) {
      state.auth = true
      state.email = data.email
      state.name = data.name
    },
    [types.LOGOUT] (state) {
      state.email = null
      state.name = null
      state.auth = false
      localStorage.removeItem('token')
    },
    [types.REFRESH_TOKEN] (state, token) {
      localStorage.token = token
    }
  },
  actions: {
    login ({ commit, dispatch }, data) {
      return user.login(data).then(res => {
        const token = res.data.token
        commit(types.LOGIN, token)
        dispatch('profile')
      }).catch(e => {
        console.log(e.response)
      })
    },
    profile ({ commit }) {
      return user.getProfile().then(res => {
        if (res.status === 200) {
          commit(types.PROFILE, res.data)
        }
      })
    },
    logout ({ commit }) {
      return user.logout().then(() => {
        commit(types.LOGOUT)
        router.replace({ name: 'login' })
      })
    },
    // 将刷新的 token 保存至本地
    refreshToken ({commit}, token) {
      commit('refreshToken', token)
    }
  }
}
