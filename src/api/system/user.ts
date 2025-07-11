import api from '@/utils/request.ts'

export interface UserInfo {
  id: number;
  username: string;
}

export const userApi = {
  getUserInfo(userID: number): Promise<UserInfo | null > {
    return api.get(`/user/${userID}`)
      .then(response => response.data)
      .catch(error => {
        console.error('获取用户信息失败:', error);
        return null;
      });
  },
}
