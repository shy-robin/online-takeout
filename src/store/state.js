export default {
  title: '',
  sort: '',
  page: null,
  list: [],
  food: [],
  users: JSON.parse(window.sessionStorage.getItem('users')) ? JSON.parse(window.sessionStorage.getItem('users')) : {id: '', name: '', password: '', phone: ''},
  // users: window.sessionStorage.getItem('users'), // 获取登录状态
  commodities: [],
  comments: [],
  storeInfo: {},
}