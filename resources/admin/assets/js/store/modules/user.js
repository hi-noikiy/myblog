import * as types from '../mutation-types'
import user from '../../api/user'
import axios from 'axios'
export default {
  state: {
    email: '',
    name: '',
    token: '',
    auth: false
  },
  mutations: {
    [types.LOGIN] (state, token) {
      state.auth = true
      state.token = token
      localStorage.token = token
    },
    [types.PROFILE] (state, data) {
      state.email = data.email
      state.name = data.name
    }
  },
  actions: {
    login ({ commit, dispatch }, data) {
      return user.login(data).then(res => {
        const token = res.data.token
        commit(types.LOGIN, token)
        axios.defaults.headers.common['Authorization'] = token
        dispatch('profile')
      })
    },
    profile ({commit}) {
      return user.getProfile().then(res => {
        if (res.status === 200) {
          commit(types.PROFILE, res.data)
        }
      })
    }
  }
}
