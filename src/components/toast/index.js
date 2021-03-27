import Toast from "./Toast.vue"
import { createApp } from 'vue'

const obj = {}

obj.install = function(Vue) {
  // // 1.创建组件构造器
  // const toastConstructor = Vue.extend(Toast)

  // // 2.根据组件构造器，创建出一个组件对象
  // const toast = new toastConstructor()

  const toast = createApp(Toast)
    .mount(document.createElement('div'))

  // 3.将组件对象手动挂载到某一个元素上
  // toast.mount(document.createElement("div"))

  // 4.toast.$el对应的就是div
  // document.body.appendChild(toast.$el)

  // 5.添加原型，给实例对象调用
  Vue.config.globalProperties.$toast = toast

}

export default obj
