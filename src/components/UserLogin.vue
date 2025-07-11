<script setup lang="ts">
import { Close } from '@element-plus/icons-vue'
import "@/assets/less/common.less"
</script>

<template>
  <div class="modal-overlay"></div>
  <div class="login-container">
    <el-card class="login-card">
      <template #header>
        <div class="card-header">
          <h2>用户登录</h2>
          <el-icon class="close-btn">
            <Close />
          </el-icon>
        </div>
      </template>

      <el-form label-position="top">
        <el-form-item label="用户名">
          <el-input placeholder="请输入用户名" prefix-icon="User" />
        </el-form-item>

        <el-form-item label="密码">
          <el-input type="password" placeholder="请输入密码" prefix-icon="Lock" show-password />
        </el-form-item>

        <el-form-item class="remember-item">
          <el-checkbox>记住我</el-checkbox>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" class="login-btn">登录</el-button>
        </el-form-item>
      </el-form>

      <div class="footer-links">
        <el-link :underline="false">忘记密码?</el-link>
        <el-link :underline="false">注册账号</el-link>
      </div>
    </el-card>
  </div>
</template>



<style lang="less" scoped>
.login-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  .login-card {
    width: 400px;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    animation: fadeInUp 0.5s ease-out;

    .card-header {
      position: relative;
      text-align: center;
      color: #333;
      padding-right: 40px;

      h2 {
        margin: 0;
        font-size: 22px;
        font-weight: 500;
        letter-spacing: 1px;
      }

      .close-btn {
        position: absolute;
        right: 15px;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
        font-size: 20px;
        color: #aaa;
        transition: all 0.3s;

        &:hover {
          color: #666;
          transform: translateY(-50%) scale(1.1);
        }
      }
    }

    :deep(.el-card__header) {
      border-bottom: 1px solid #eee;
      padding: 20px;
    }

    :deep(.el-form) {
      padding: 0 20px;
    }

    .remember-item {
      margin-bottom: 18px;

      :deep(.el-checkbox__label) {
        color: #666;
      }
    }

    .login-btn {
      width: 100%;
      margin-top: 10px;
      height: 45px;
      font-size: 16px;
      letter-spacing: 2px;
    }

    .footer-links {
      display: flex;
      justify-content: space-between;
      margin-top: 15px;
      padding: 0 20px 20px;

      .el-link {
        font-size: 13px;
        color: #666;

        &:hover {
          color: #409eff;
        }
      }
    }
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
