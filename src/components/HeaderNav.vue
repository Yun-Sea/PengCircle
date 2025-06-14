<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import RightSetting from '@/components/RightSetting.vue'
import logo from '@/assets/images/logo.png'

const router = useRouter()
const activeIndex = ref('1')

// 路由设置
const routeMap: Record<string, { name: string }> = {
  '1': { name: 'Home' }, // 首页
  '2': { name: 'Concern' }, // 关注
}

const handleSelect = (index: string) => {
  console.log('Menu selected:', index)
  activeIndex.value = index
  router.push(routeMap[index])
}


// 右侧详细菜单栏设置
const isRightMenuVisible = ref<boolean>(false)

const toggleRightMenu = () => {
  // 修改状态
  isRightMenuVisible.value = !isRightMenuVisible.value
}

watch(isRightMenuVisible, (newVal) => {
  if (newVal) {
    document.body.style.overflow = 'hidden' // 禁用主页滚动
  } else {
    document.body.style.overflow = '' // 恢复主页滚动
  }
})
</script>

<template>
  <div class="glass-navbar">
    <!-- LOGO -->
    <div class="logo-container">
      <img :src="logo" alt="Logo" class="logo" />
      <span class="logo-text">PengCircle</span>
    </div>

    <!-- 菜单项 -->
    <el-menu
      class="glass-menu"
      mode="horizontal"
      :default-active="activeIndex"
      @select="handleSelect"
    >
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">关注</el-menu-item>
      <el-menu-item index="3">我的动态</el-menu-item>
    </el-menu>

    <!-- 个人中心 -->
    <div class="user-center">
      <div class="user-info" @click="toggleRightMenu">
        <el-avatar :size="36" src="https://via.placeholder.com/36x36" />
        <span class="username">用户名</span>
      </div>
    </div>
  </div>
  <!--右侧详细菜单栏-->
  <div class="right-menu" v-show="isRightMenuVisible">
    <RightSetting @close="toggleRightMenu" />
  </div>
</template>

<style lang="less" scoped>
// 变量定义
@glass-bg-color: rgba(255, 255, 255, 0.2);
@glass-border-color: rgba(255, 255, 255, 0.3);
@primary-color: #409eff;
@text-color: #333;
@hover-bg-color: rgba(255, 255, 255, 0.3);
@blur-value: 10px;

// 导航栏样式
.glass-navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 60px;
  background: @glass-bg-color;
  backdrop-filter: blur(@blur-value);
  -webkit-backdrop-filter: blur(@blur-value);
  //border-bottom: 1px solid @glass-border-color;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 900;

  // LOGO区域
  .logo-container {
    display: flex;
    align-items: center;
    cursor: pointer;

    .logo {
      width: 40px;
      height: 40px;
      margin-right: 10px;
    }

    .logo-text {
      font-size: 18px;
      font-weight: bold;
      color: @text-color;
    }
  }

  // 菜单样式
  .glass-menu {
    background: transparent;
    border-bottom: none;
    flex: 1;
    justify-content: center;
    user-select: none;

    &:deep(.el-menu-item),
    &:deep(.el-sub-menu__title) {
      color: @text-color;
      font-weight: 500;
      transition: all 0.3s;

      &:hover {
        background: @hover-bg-color;
        color: @primary-color;
      }
    }

    &:deep(.el-menu-item.is-active) {
      color: @primary-color;
      border-bottom: 2px solid @primary-color;
    }
  }

  // 用户中心
  .user-center {
    display: flex;
    align-items: center;

    .user-info {
      display: flex;
      align-items: center;
      cursor: pointer;
      padding: 5px 10px;
      border-radius: 20px;
      transition: all 0.3s;

      &:hover {
        background: @hover-bg-color;
      }

      .username {
        margin-left: 8px;
        font-size: 14px;
        color: @text-color;
      }
    }
  }
}

// 详细菜单栏样式
.right-menu {
  position: fixed;
  top: 0;
  right: 0;
  border-radius: 5px;
  z-index: 1000;
}
</style>
