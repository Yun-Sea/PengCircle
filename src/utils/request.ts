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


export default  api
