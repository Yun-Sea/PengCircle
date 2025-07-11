import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const isLoggedIn = ref(false)
  const user = ref(null)

  // 检查本地存储的token
  function checkAuth() {
    const token = localStorage.getItem('token')
    isLoggedIn.value = !!token
    return isLoggedIn.value
  }

  // 登录方法
   function login(credentials: { username: string; password: string }) {
    // 调用API登录...
    // 登录成功后:
    isLoggedIn.value = true
    localStorage.setItem('token', 'your-auth-token')
  }

  // 登出方法
  function logout() {
    isLoggedIn.value = false
    localStorage.removeItem('token')
  }

  return { isLoggedIn, user, checkAuth, login, logout }
})

export default useAuthStore;
