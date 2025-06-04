<script lang="ts">
export default {
  data() {
    return {
      commentText: '',
      showLikes: true,
      showComments: true,
      showInput: true,
      images: [
        'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
        'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
        'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg'
      ],
      comments: [
        { user: '张三', content: '玩得开心啊！' },
        { user: '李四', content: '照片拍得真好看' }
      ]
    }
  },
  computed: {
    imageClass() {
      const count = this.images.length
      if (count === 1) return 'single-image'
      if (count === 2) return 'double-image'
      if (count === 4) return 'quad-image'
      return 'multi-image'
    }
  }
}
</script>


<template>
  <el-card class="friend-circle-item" shadow="hover">
    <!-- 用户信息区 -->
    <div class="user-info">
      <el-avatar :size="40" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
      <div class="user-details">
        <div class="username">用户名</div>
        <div class="post-time">2小时前 · <i class="el-icon-location-outline"></i> 北京朝阳公园</div>
      </div>
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <i class="el-icon-more"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>收藏</el-dropdown-item>
          <el-dropdown-item>举报</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>

    <!-- 动态内容 -->
    <div class="content">
      <p>这是朋友圈的内容文字，可以多行显示。今天天气真好，出去走走~</p>
    </div>

    <!-- 图片展示区 -->
    <el-image
      v-for="(img, index) in images"
      :key="index"
      :src="img"
      :preview-src-list="images"
      :class="imageClass"
      fit="cover"
    ></el-image>

    <!-- 互动区 -->
    <div class="interaction">
      <div class="action-buttons">
        <el-button type="text" icon="el-icon-thumb">赞</el-button>
        <el-button type="text" icon="el-icon-chat-line-round">评论</el-button>
      </div>

      <!-- 点赞列表 -->
      <div class="like-list" v-if="showLikes">
        <el-tag size="mini" type="danger" effect="plain">❤️</el-tag>
        <span class="like-names">张三、李四、王五</span>
      </div>

      <!-- 评论列表 -->
      <div class="comment-list" v-if="showComments">
        <div class="comment-item" v-for="(comment, index) in comments" :key="index">
          <span class="comment-user">{{ comment.user }}：</span>
          <span class="comment-content">{{ comment.content }}</span>
        </div>
      </div>

      <!-- 评论输入框 -->
      <div class="comment-input" v-if="showInput">
        <el-input
          placeholder="写评论..."
          v-model="commentText"
          size="small"
        >
          <el-button slot="append" type="primary" size="small">发送</el-button>
        </el-input>
      </div>
    </div>
  </el-card>
</template>

<style scoped>
.friend-circle-item {
  margin-bottom: 20px;
  border-radius: 8px;
  border: none;
}

.friend-circle-item >>> .el-card__body {
  padding: 15px;
}

.user-info {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}

.user-details {
  flex: 1;
  margin-left: 12px;
}

.username {
  font-weight: bold;
  font-size: 15px;
  color: #333;
}

.post-time {
  font-size: 12px;
  color: #999;
  margin-top: 2px;
}

.el-dropdown-link {
  cursor: pointer;
  color: #909399;
  font-size: 18px;
}

.content {
  margin: 10px 0 15px;
  line-height: 1.5;
  font-size: 15px;
  color: #333;
}

.el-image {
  margin-right: 5px;
  margin-bottom: 5px;
  border-radius: 4px;
  cursor: pointer;
}

.single-image {
  width: 100%;
  height: 300px;
}

.double-image {
  width: calc(50% - 3px);
  height: 180px;
}

.quad-image {
  width: calc(50% - 3px);
  height: 120px;
}

.multi-image {
  width: calc(33.33% - 4px);
  height: 100px;
}

.interaction {
  margin-top: 15px;
  padding-top: 10px;
  border-top: 1px solid #f0f0f0;
}

.action-buttons {
  display: flex;
  margin-bottom: 8px;
}

.action-buttons .el-button {
  padding: 0 10px;
}

.like-list {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  background-color: #f7f7f7;
  border-radius: 4px;
  margin-bottom: 8px;
}

.like-names {
  margin-left: 8px;
  font-size: 13px;
  color: #606266;
}

.comment-list {
  background-color: #f7f7f7;
  border-radius: 4px;
  padding: 8px 12px;
  margin-bottom: 8px;
}

.comment-item {
  margin: 5px 0;
  line-height: 1.4;
  font-size: 13px;
}

.comment-user {
  color: #576B95;
  font-weight: 500;
}

.comment-input {
  margin-top: 10px;
}
</style>
