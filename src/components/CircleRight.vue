<template>
  <div class="right-sidebar-container">
    <!-- 收缩按钮 -->
    <div class="sidebar-toggle-btn" @click="toggleSidebar">
      <el-icon :size="20">
        <component :is="isCollapsed ? 'ArrowLeft' : 'ArrowRight'" />
      </el-icon>
    </div>

    <!-- 侧边栏内容 -->
    <el-aside class="right-sidebar" :style="{ width: isCollapsed ? '0' : '280px' }">
      <div class="sidebar-content">
        <!-- 用户信息卡片 -->
        <el-card class="user-card" shadow="never">
          <div class="user-header">
            <el-avatar
              :size="60"
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
            />
            <div class="user-info">
              <h4>张三</h4>
              <p class="user-title">前端开发者 | 开源爱好者</p>
            </div>
          </div>

          <div class="user-details">
            <div class="detail-item">
              <el-icon><User /></el-icon>
              <span>用户名: zhangsan</span>
            </div>
            <div class="detail-item">
              <el-icon><Message /></el-icon>
              <span>邮箱: zhangsan@example.com</span>
            </div>
            <div class="detail-item">
              <el-icon><Location /></el-icon>
              <span>地区: 北京, 中国</span>
            </div>
            <div class="detail-item">
              <el-icon><Clock /></el-icon>
              <span>注册于: 2022/3/15</span>
            </div>
          </div>
        </el-card>

        <!-- 兴趣标签 -->
        <el-card class="tags-card" shadow="never">
          <template #header>
            <div class="card-header">
              <span>兴趣标签</span>
            </div>
          </template>
          <div class="tags-container">
            <el-tag
              v-for="(tag, index) in tags"
              :key="index"
              :type="tagTypes[index % tagTypes.length]"
              size="small"
              class="tag-item"
            >
              {{ tag }}
            </el-tag>
          </div>
        </el-card>

        <!-- 操作按钮 -->
        <div class="action-buttons">
          <el-button type="primary" plain round>发布</el-button>
          <el-button round>关注</el-button>
        </div>
      </div>
    </el-aside>
  </div>
</template>

<script setup>
import { Clock, Location, Message, User } from '@element-plus/icons-vue'
import { ref } from 'vue'

const isCollapsed = ref(false)
const tags = ref(['Web', 'UserScript', 'CS5', 'Node.js', 'UI设计', '前端架构'])
const tagTypes = ref(['', 'success', 'info', 'warning', 'danger'])

const toggleSidebar = () => {
  isCollapsed.value = !isCollapsed.value
}
</script>

<style scoped>
.right-sidebar-container {
  position: fixed;
  top: 60px; /* 与顶部导航栏高度一致 */
  right: 0;
  bottom: 0;
  z-index: 999;
  display: flex;
}

.sidebar-toggle-btn {
  width: 24px;
  height: 48px;
  background-color: #fff;
  border-radius: 4px 0 0 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: -2px 0 4px rgba(0, 0, 0, 0.1);
  align-self: center;
  margin-left: -24px;
  z-index: 1;
}

.sidebar-toggle-btn:hover {
  background-color: #f5f7fa;
}

.right-sidebar {
  height: 100%;
  background-color: #fff;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.08);
  transition: width 0.3s ease;
  overflow: hidden;
}

.sidebar-content {
  padding: 16px;
  height: 100%;
  overflow-y: auto;
}

.user-card {
  margin-bottom: 16px;
  border-radius: 8px;
}

.user-header {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.user-info {
  margin-left: 12px;
}

.user-info h4 {
  margin: 0;
  font-size: 16px;
  color: #303133;
}

.user-title {
  margin: 4px 0 0;
  font-size: 12px;
  color: #909399;
}

.user-details {
  margin-top: 12px;
}

.detail-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 13px;
  color: #606266;
}

.detail-item .el-icon {
  margin-right: 8px;
  font-size: 16px;
  color: #909399;
}

.tags-card {
  margin-bottom: 16px;
  border-radius: 8px;
}

.card-header {
  font-size: 14px;
  font-weight: 600;
  color: #303133;
}

.tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag-item {
  margin-bottom: 4px;
}

.action-buttons {
  display: flex;
  gap: 8px;
  margin-top: 16px;
}

.action-buttons .el-button {
  flex: 1;
}
</style>
