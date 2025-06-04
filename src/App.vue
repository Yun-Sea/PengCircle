<script setup lang="ts">
import CircleMenu from '@/components/CircleMenu.vue'
import CircleMain from '@/components/CircleMain.vue'
import CircleLeft from '@/components/CircleLeft.vue'
import CircleRight from '@/components/CircleRight.vue'
</script>

<template>
  <div class="main-layout">
    <el-container>
      <el-header><CircleMenu /></el-header>
      <el-container>
        <el-aside width="200px"><CircleLeft /></el-aside>
        <el-main><CircleMain /></el-main>
        <el-aside width="200px"><CircleRight /></el-aside>
      </el-container>
    </el-container>
    <span>赣121234314</span>
  </div>
</template>

<style scoped lang="less">
.main-layout {
  margin: 0 auto;
  max-width: 1400px;
  width: 90%;

  .el-header {
    margin: 10px 0;
    padding: 0;
  }
}
</style>
