import axios from 'axios'

export function ajax1(url, params={}) {
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })

  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err);
  })

  instance.interceptors.response.use(response => { // 使用响应拦截器，修改响应数据
    return response.data
  }, err => {
    console.log(err);
  })

  const res = instance({ // 当params存在时，使用post请求；params为空时，使用get请求
    url,
    params
  })

  return res
}

export function ajax2(url, params={}) {
  const instance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 5000,
  })

  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err);
  })
  instance.interceptors.response.use(response => {
    return response.data
  }, err => {
    console.log(err);
  })

  return instance({
    url,
    params, // 用于 get请求，加入url后
    // method: 'get' // 默认使用 get 请求
  })
}

export function mockAjax(url) {
  return axios.get(url)
}