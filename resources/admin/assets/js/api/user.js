import axios from '../utils/http'

export default {
  login (data) {
    return axios.post('/api/auth/login', data)
  },
  getProfile () {
    return axios.get('/api/profile')
  },
  logout () {
    return axios.post('/api/auth/logout')
  }
}
