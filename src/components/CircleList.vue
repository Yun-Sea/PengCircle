<script setup lang="ts">
import MomentCard from './MomentCard.vue';
</script>

<template>
  <div class="moments-container">
    <MomentCard
      username="张三"
      time="2小时前"
      content="今天天气真好，出去走走~"
      :images="[
        'https://picsum.photos/300/300?random=1',
        'https://picsum.photos/300/300?random=2',
        'https://picsum.photos/300/300?random=3'
      ]"
    />

    <MomentCard
      username="李四"
      time="昨天"
      content="分享一首好听的歌 #音乐#"
      :images="[
        'https://picsum.photos/300/300?random=4'
      ]"
      :initial-comments="[
        { user: '王五', text: '好听！' },
        { user: '赵六', text: '求歌名' }
      ]"
    />
  </div>
</template>



<style lang="less" scoped>
.moments-container {
  max-width: 600px;
  height: 100vh;
  margin: 0 auto;
  padding: 20px;
}
</style>
