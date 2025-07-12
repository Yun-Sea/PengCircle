<script setup lang="ts">
import { ref } from 'vue'
import { Close } from '@element-plus/icons-vue'

const activeItem = ref('Your Copilot')
const isSidebarOpen = ref(true)

// 菜单数据简化为字符串数组
const profileItems = [
  "个人信息",
  "赞过",
  "收藏",
]

const enterpriseItems = ['设置']





// 定义 emits 触发父组件的方法
const emits = defineEmits(['close'])

// 点击关闭按钮或蒙版时，触发 close 事件
const handleClose = () => {
  emits('close')
}
</script>

<template>
  <!-- 蒙版层 -->
  <div v-if="isSidebarOpen" class="modal-overlay" @click="handleClose"></div>

  <!-- 侧边栏 -->
  <div v-if="isSidebarOpen" class="sidebar-menu">

    <!-- 用户信息 -->
    <div class="user-section">
      <!--头像-->
      <el-avatar :size="48" src="https://via.placeholder.com/36x36" />

      <div class="username">Yun-Sea <br />用户lv1</div>
      <button class="close-btn" @click="handleClose">
        <el-icon><Close /></el-icon>
      </button>
    </div>

    <!-- 个人资料菜单 -->
    <div class="menu-section">
      <h3 class="section-title">基本设置</h3>
      <ul class="menu-list">
        <li
          v-for="item in profileItems"
          :key="item"
          class="menu-item"
          @click="activeItem = item"
          :class="{ active: activeItem === item }"
        >
          {{ item }}
        </li>
      </ul>
    </div>

    <!-- 更多 -->
    <div class="menu-section">
      <h3 class="section-title">更多</h3>
      <ul class="menu-list">
        <li
          v-for="item in enterpriseItems"
          :key="item"
          class="menu-item"
          @click="activeItem = item"
          :class="{ active: activeItem === item }"
        >
          {{ item }}
        </li>
      </ul>
    </div>

    <div>
      备案号
    </div>
  </div>
</template>

<style scoped lang="less">
// 定义一些基本的颜色变量
@background-color: #f6f8fa;
@border-color: #d0d7de;
@text-color: #57606a;
@active-background-color: #e7f2ff;
@active-text-color: #0969da;
@hover-background-color: #f3f4f6;

// 定义字体样式
@font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;

// 定义间距和尺寸
@padding-base: 16px;
@padding-small: 8px;
@padding-large: 24px;
@margin-base: 16px;
@margin-small: 8px;
@margin-large: 24px;
@border-radius: 6px;
@font-size-base: 14px;
@font-size-large: 16px;


// 蒙版
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  cursor: pointer;
}

.sidebar-menu {
  position: fixed;
  top: 0;
  right: 0;
  width: 280px;
  margin: 0 !important;
  padding: @padding-base;
  background-color: @background-color;
  border-right: 1px solid @border-color;
  font-family: @font-family;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: auto;
  z-index: 1000;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);

  .user-section {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: @padding-small 0 @padding-base;
    border-bottom: 1px solid @border-color;
    margin-bottom: @margin-base;
    position: relative;

    .username {
      font-size: @font-size-large;
      font-weight: 600;
      flex: 1;
    }

    .close-btn {
      background: none;
      border: none;
      cursor: pointer;
      color: @text-color;
      padding: 4px;
      margin-left: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;

      &:hover {
        background-color: @hover-background-color;
        color: #000;
      }
    }
  }

  .menu-section {
    margin-bottom: @margin-large;

    .section-title {
      font-size: @font-size-base;
      font-weight: 600;
      margin: 0 0 @margin-small 0;
      padding: 0 @padding-small;
      color: @text-color;
    }

    .menu-list {
      list-style: none;
      padding: 0;
      margin: 0;

      .menu-item {
        padding: @padding-small @padding-base;
        border-radius: @border-radius;
        cursor: pointer;
        font-size: @font-size-base;
        margin-bottom: 2px;

        &:hover {
          background-color: @hover-background-color;
        }

        &.active {
          background-color: @active-background-color;
          color: @active-text-color;
          font-weight: 500;
        }
      }
    }
  }

  .status-btn,
  .signout-btn {
    width: 100%;
    padding: 6px @padding-base;
    background-color: transparent;
    border: 1px solid @border-color;
    border-radius: @border-radius;
    font-size: @font-size-base;
    text-align: left;
    cursor: pointer;
    margin-bottom: @margin-base;

    &:hover {
      background-color: @hover-background-color;
    }
  }

  .signout-section {
    margin-top: auto;
    padding-top: @padding-base;
    border-top: 1px solid @border-color;
  }
}
</style>
