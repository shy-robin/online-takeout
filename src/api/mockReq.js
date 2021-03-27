import { mockAjax } from './ajax.js'

export const getCommodities = () => mockAjax('/commodities')
export const getComments = () => mockAjax('/comments')
export const getStoreInfo = () => mockAjax('/storeinfo')
