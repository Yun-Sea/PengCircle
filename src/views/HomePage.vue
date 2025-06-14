<script setup lang="ts">
import '@/assets/less/main.less'
import WeatherCard from '@/components/WeatherCard.vue'
import HitokotoCard from '@/components/HitokotoCard.vue'
import CircleList from '@/components/CircleList.vue'
</script>

<template>
  <div class="common-layout">
    <!--主题内容-->
    <el-container class="main-container">
      <el-aside>
        <div class="Left-Display">
          <div class="card-container">
            <WeatherCard />
            <HitokotoCard></HitokotoCard>
          </div>
        </div>
      </el-aside>
      <el-main>
        <CircleList />
      </el-main>
      <el-aside> Right</el-aside>
    </el-container>
  </div>
</template>

<style scoped lang="less">
.common-layout {
  height: 100vh;
  display: flex;
}

.main-container {

  .Left-Display {
    margin-left: 20px;
    //width: 20%;

    .card-container {
      display: flex;
      flex-direction: column;
      margin-top: 20px;
    }
  }
}
</style>
