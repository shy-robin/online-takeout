import {
  RECEIVE_TITLE,
  RECEIVE_SORT,
  RECEIVE_PAGE,
  RECEIVE_LIST,
  RECEIVE_FOOD,
  RECEIVE_USERS,
  SET_TOKEN,
  REMOVE_TOKEN,
  RECEIVE_COMMODITIES,
  RECEIVE_COMMENTS,
  RECEIVE_STOREINFO,
} from './mutation-types'

export default {
  [RECEIVE_TITLE](state, payload) {
    state.title = payload.title
  },
  [RECEIVE_SORT](state, payload) {
    state.sort = payload.sort
  },
  [RECEIVE_PAGE](state, payload) {
    state.page = payload.page
  },
  [RECEIVE_LIST](state, payload) {
    state.list = payload.list
  },
  [RECEIVE_FOOD](state, payload) {
    state.food = payload.food
  },
  [RECEIVE_USERS](state, payload) {
    state.users.name = payload.name
    state.users.password = payload.password
    state.users.phone = payload.phone
    state.users.id = payload.id
  },
  [SET_TOKEN](state, payload) {
    window.sessionStorage.setItem('users', payload)
  },
  [REMOVE_TOKEN](state, payload) {
    state.users = {id: '', name: '', password: '', phone: ''} // 重置users
    window.sessionStorage.removeItem(payload) // 删除sessionStorge的数据
  },
  [RECEIVE_COMMODITIES](state, payload) {
    state.commodities = payload
  },
  [RECEIVE_COMMENTS](state, payload) {
    state.comments = payload
  },
  [RECEIVE_STOREINFO](state, payload) {
    state.storeInfo = payload
  },
}