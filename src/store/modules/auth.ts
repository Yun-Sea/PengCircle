import { defineStore } from 'pinia';
import { type Ref, ref } from 'vue'
import router from '@/router';
import authApi from '@/api/auth';

export const useAuthStore = defineStore('auth', () => {
  //状态
  const token : Ref<string | null>= ref(localStorage.getItem('access_token') || null);
  const user = ref(JSON.parse(localStorage.getItem('auth_user') || 'null'));

  const login = async (credentials) => {

    // 登录
    const response = await authApi.login();

    // 保存token和用户信息
    token.value = response.token;
    user.value = response.user;

    // 保存到localStorage
    localStorage.setItem('auth_token', response.token);
    localStorage.setItem('auth_user', JSON.stringify(response.user));

    // 跳转到首页
    router.push('/');

    try {}
    catch (error) {
      console.log(error)
    }
   }

   return{
    token,
    user,
    login
   }
});
