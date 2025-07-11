<script setup lang="ts">
import '@/assets/less/base.less'
// import "@/assets/less/main.less"
import HeaderNav from '@/components/HeaderNav.vue'
</script>

<template>

  <!--导航栏固定-->
  <header>
    <HeaderNav />
  </header>

  <!--主体内容-->
  <main>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>

  <!--  <footer>-->
  <!--  </footer>-->
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 900;
}

main {
  margin-top: 60px;
}

/* 全局过渡动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
