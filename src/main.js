import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './mock/mockServer.js'
// import VueLazyLoad from 'vue-lazyload'
import {
  Button, Cell, CellGroup, Dialog, Toast, Switch,
  Tabbar, TabbarItem, Icon, Lazyload, Tabs, Tab,
  Overlay, Popup
} from 'vant'

// Vue.use(LazyLoad,{
//   loading:require('./assets/img/loading.png'),
// })

Vue.use(Button)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Dialog)
Vue.use(Toast)
Vue.use(Switch)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Icon)
Vue.use(Lazyload)
Vue.use(Tabs)
Vue.use(Tab)
Vue.use(Overlay)
Vue.use(Popup)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
