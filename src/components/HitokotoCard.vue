<script setup lang="ts">
import { ChatLineRound } from '@element-plus/icons-vue'
import { ref, onMounted } from 'vue'
import { getHitokoto } from '@/api'
import type { HitokotoResponse } from '@/api'

// 使用 ref 来存储异步数据
const data = ref<HitokotoResponse | null>(null)

// 在组件挂载时获取数据
onMounted(async () => {
  try {
    data.value = await getHitokoto()
  } catch (error) {
    console.error('获取一言失败:', error)
    data.value = null // 设置默认值
  }
})
</script>

<template>
  <el-card class="info-card hitokoto-card">
    <div class="card-header">
      <el-icon class="card-icon">
        <ChatLineRound />
      </el-icon>
      <span class="card-title">每日一言</span>
    </div>
    <div class="hitokoto-content">
      <div class="hitokoto-text">{{ data?.hitokoto || '加载失败' }}</div>
      <div class="hitokoto-author">—— {{ data?.from || '无' }}</div>
    </div>
  </el-card>
</template>

<style lang="less" scoped>
// 变量定义
@card-bg-light: #ffffff;
@card-bg-dark: #1f1f1f;
@text-color-light: #303133;
@text-color-dark: rgba(255, 255, 255, 0.65);
@border-color-light: #e6e6e6;
@border-color-dark: #2f2f2f;
@primary-color-light: #409eff;
@primary-color-dark: #1890ff;
@transition-time: 0.3s;

.info-card {
  margin-bottom: 16px;
  border-radius: 8px;
  transition: all @transition-time;

  :deep(.el-card__body) {
    padding: 16px;
  }

  &.dark {
    background-color: @card-bg-dark;
    border-color: @border-color-dark;
    color: @text-color-dark;
  }
}

.card-header {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid @border-color-light;
  transition: all @transition-time;

  .dark & {
    border-bottom-color: @border-color-dark;
  }

  .card-icon {
    font-size: 18px;
    margin-right: 8px;
    color: @primary-color-light;

    .dark & {
      color: @primary-color-dark;
    }
  }

  .card-title {
    font-size: 16px;
    font-weight: 500;
  }
}

.hitokoto-content {
  .hitokoto-text {
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 12px;
    font-style: italic;
  }

  .hitokoto-author {
    text-align: right;
    font-size: 14px;
    color: #909399;

    .dark & {
      color: rgba(255, 255, 255, 0.45);
    }
  }
}
</style>
