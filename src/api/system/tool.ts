import axios from 'axios'
import type {HitokotoResponse} from '@/types/inedx.ts'


// 获取一言
export const getHitokoto = async () => {
  try {
    const response = await axios.get<HitokotoResponse>('https://v1.hitokoto.cn');
    console.log(response.data);
    return response.data; // 返回获取到的数据
  } catch (error) {
    console.error('获取一言失败:', error);
    return null; // 或者根据需要抛出自定义错误
  }
}
