import axios from 'axios'

// 实例创建
const api = axios.create(
  {
    baseURL: 'http://localhost:8000/',
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json'
    }
  }
)

// api.interceptors.request.use(
//
//   // 请求成功执行的函数
//   (config) => {
//     const token = localStorage.getItem('token')
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`
//     }
//     return config
//   },
//
//   // 请求失败执行的函数
//   (error) => {
//     console.log( '请求错误',error)
//     return Promise.reject(error)
//   }
// )

export default  api
