<template>
  <div class="left-sidebar">
    <!-- 天气卡片 -->
    <el-card class="sidebar-card weather-card">
      <div class="weather-header">
        <el-icon><Sunny /></el-icon>
        <h3>今日天气</h3>
      </div>

      <div class="weather-content">
        <div class="weather-main">
          <div class="temperature">24°C</div>
          <div class="weather-icon">
            <el-icon :size="50"><PartlyCloudy /></el-icon>
          </div>
        </div>

        <el-divider />

        <div class="weather-details">
          <div class="detail-row">
            <span class="detail-label"><el-icon><WindPower /></el-icon> 风力</span>
            <span class="detail-value">东南风3级</span>
          </div>
          <div class="detail-row">
            <span class="detail-label"><el-icon><Watermelon /></el-icon> 湿度</span>
            <span class="detail-value">68%</span>
          </div>
          <div class="detail-row">
            <span class="detail-label"><el-icon><Umbrella /></el-icon> 降水</span>
            <span class="detail-value">10%</span>
          </div>
        </div>

        <div class="weather-footer">
          <el-icon><Location /></el-icon>
          <span>北京市朝阳区</span>
        </div>
      </div>
    </el-card>

    <!-- 每日一言卡片 -->
    <el-card class="sidebar-card quote-card">
      <div class="quote-header">
        <el-icon><ChatLineRound /></el-icon>
        <h3>每日一言</h3>
      </div>

      <el-divider />

      <div class="quote-content">
        <p class="quote-text">"The only way to do great work is to love what you do."</p>
        <p class="quote-author">— Steve Jobs</p>
      </div>
    </el-card>
  </div>
</template>

<style scoped>
.left-sidebar {
  width: 280px;
  padding: 16px;
  background-color: #f8f9fa;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  overflow-y: auto;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.05);
}

.sidebar-card {
  margin-bottom: 20px;
  border-radius: 8px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.weather-header,
.quote-header {
  display: flex;
  align-items: center;
  padding: 0 0 12px 0;
}

.weather-header h3,
.quote-header h3 {
  margin: 0 0 0 8px;
  font-size: 16px;
  color: #333;
}

.weather-header .el-icon {
  color: #F7BA2A;
  font-size: 20px;
}

.quote-header .el-icon {
  color: #409EFF;
  font-size: 20px;
}

.weather-content {
  padding: 8px 0;
}

.weather-main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
}

.temperature {
  font-size: 36px;
  font-weight: bold;
  color: #333;
}

.weather-icon {
  color: #F7BA2A;
}

.weather-details {
  padding: 8px 0;
}

.detail-row {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  font-size: 14px;
}

.detail-label {
  color: #666;
  display: flex;
  align-items: center;
}

.detail-label .el-icon {
  margin-right: 6px;
  font-size: 16px;
}

.detail-value {
  color: #333;
  font-weight: 500;
}

.weather-footer {
  display: flex;
  align-items: center;
  padding-top: 8px;
  font-size: 13px;
  color: #888;
}

.weather-footer .el-icon {
  margin-right: 6px;
  font-size: 16px;
}

.quote-content {
  padding: 8px 0;
}

.quote-text {
  font-size: 15px;
  line-height: 1.6;
  color: #333;
  font-style: italic;
  margin: 0;
}

.quote-author {
  text-align: right;
  font-size: 14px;
  color: #666;
  margin-top: 12px;
}

.el-divider {
  margin: 12px 0;
}
</style>
