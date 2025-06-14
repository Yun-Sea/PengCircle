<script setup lang="ts">
import { Sunny } from '@element-plus/icons-vue'

defineProps<{
  temperature?: string
  weatherType?: string
  temperatureRange?: string
  humidity?: string
  windSpeed?: string
  airQuality?: string
}>()
</script>

<template>
  <el-card class="info-card weather-card">
    <div class="card-header">
      <el-icon class="card-icon"><Sunny /></el-icon>
      <span class="card-title">今日天气</span>
    </div>
    <div class="weather-content">
      <div class="weather-main">
        <div class="temperature">{{ temperature || '24°C' }}</div>
        <div class="weather-info">
          <div class="weather-type">{{ weatherType || '晴' }}</div>
          <div class="weather-range">{{ temperatureRange || '18°C ~ 28°C' }}</div>
        </div>
      </div>
      <div class="weather-details">
        <div class="detail-item">
          <span class="detail-label">湿度</span>
          <span class="detail-value">{{ humidity || '65%' }}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">风速</span>
          <span class="detail-value">{{ windSpeed || '3级' }}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">空气质量</span>
          <span class="detail-value">{{ airQuality || '优' }}</span>
        </div>
      </div>
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
@primary-color-light: #409EFF;
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

.weather-content {
  .weather-main {
    display: flex;
    align-items: center;
    margin-bottom: 16px;

    .temperature {
      font-size: 36px;
      font-weight: bold;
      margin-right: 16px;
    }

    .weather-info {
      .weather-type {
        font-size: 16px;
        margin-bottom: 4px;
      }

      .weather-range {
        font-size: 14px;
        color: #909399;

        .dark & {
          color: rgba(255, 255, 255, 0.45);
        }
      }
    }
  }

  .weather-details {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;

    .detail-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 8px;
      background-color: #f5f7fa;
      border-radius: 4px;
      transition: all @transition-time;

      .dark & {
        background-color: #2a2a2a;
      }

      .detail-label {
        font-size: 12px;
        color: #909399;
        margin-bottom: 4px;

        .dark & {
          color: rgba(255, 255, 255, 0.45);
        }
      }

      .detail-value {
        font-size: 14px;
        font-weight: 500;
      }
    }
  }
}
</style>
