import api from "@/utils/request";
import type {LoginData,TokenData} from "@/types/auth.types.ts"

export default {
  /**
   * 用户登录
   * @param credentials 登录凭证 { username, password }
   */
  async login(credentials: LoginData): Promise<TokenData> {
    const response = await api.post('/login', credentials);
    return response.data;
  },
}
