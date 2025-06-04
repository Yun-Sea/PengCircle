<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')

const handleSelect = (index) => {
  console.log('Selected:', index)
}
</script>

<template>
  <el-header class="top-navigation">
    <div class="nav-container">
      <div class="logo-area">
        <span class="logo">LOGO</span>
      </div>

      <div class="nav-menu">
        <el-menu mode="horizontal" :default-active="activeIndex" @select="handleSelect">
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">工作空间</el-menu-item>
        </el-menu>
      </div>

      <div class="user-actions">
        <el-dropdown>
          <span class="el-dropdown-link">
            <el-avatar
              :size="36"
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
            />
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item>设置</el-dropdown-item>
              <el-dropdown-item divided>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </el-header>
</template>

<style scoped>
.top-navigation {
  height: 60px;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
}

.nav-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.logo-area {
  font-size: 20px;
  font-weight: bold;
  color: #409eff;
}

.nav-menu {
  flex: 1;
  display: flex;
  justify-content: center;
}

.nav-menu >>> .el-menu {
  border-bottom: none;
}

.user-actions {
  display: flex;
  align-items: center;
}

.el-dropdown-link {
  display: flex;
  align-items: center;
  cursor: pointer;
}
</style>
