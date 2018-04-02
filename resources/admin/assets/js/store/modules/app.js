import * as types from '../mutation-types'
import { appRouters } from '../../router/routes'
export default {
  state: {
    menuList: []
  },
  mutations: {
    [types.UPDATE_MENULIST] (state) {
      state.menuList = appRouters
    }
  }
}
