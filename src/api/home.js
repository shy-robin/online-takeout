import { ajax1, ajax2 } from './ajax.js'

export function getMultiData() {
  return ajax1('/home/mulitData')
}

export function getData(type, page) {
  return ajax1('/home/data', {type,page})
}

export function sendCode(phone) {
  return ajax2('/sendcode', {phone})
}