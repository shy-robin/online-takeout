import data from './data.json'
import Mock from 'mockjs'

// 拦截请求，返回模拟的数据
Mock.mock('/commodities', {code: 0, data: data.commodities})
Mock.mock('/comments', {code: 0, data: data.comments})
Mock.mock('/storeinfo', {code: 0, data: data.storeInfo})

// export default ???  不需要向外暴露任何数据, 只需要保存能执行即可