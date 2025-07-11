<script setup lang="ts">
import { ref } from 'vue'
import { ChatDotRound } from '@element-plus/icons-vue'

// 定义评论类型
interface CommentItem {
  user: string;
  text: string;
}

const props = defineProps({
  avatar: {
    type: String,
    default: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
  },
  username: {
    type: String,
    default: '用户名',
  },
  time: {
    type: String,
    default: '刚刚',
  },
  content: {
    type: String,
    default: '这是朋友圈的内容...',
  },
  images: {
    type: Array,
    default: () => [],
  },
  initialLikes: {
    type: Number,
    default: 0,
  },
  initialComments: {
    type: Array as () => CommentItem[],
    default: () => [],
  },
})

const isLiked = ref(false)
const showCommentInput = ref(false)
const commentText = ref('')
const comments = ref<CommentItem[]>([...props.initialComments as CommentItem[]])

const toggleLike = () => {
  isLiked.value = !isLiked.value
}

const addComment = () => {
  if (commentText.value.trim()) {
    comments.value.push({
      user: '我',
      text: commentText.value,
    })
    commentText.value = ''
    showCommentInput.value = false
  }
}

const cancelComment = () => {
  commentText.value = ''
  showCommentInput.value = false
}
</script>
<template>
  <div class="moment-card">
    <div class="user-info">
      <el-avatar :size="40" :src="avatar" />
      <div class="user-text">
        <span class="username">{{ username }}</span>
        <span class="time">{{ time }}</span>
      </div>
    </div>

    <div class="content">
      <p>{{ content }}</p>
      <div v-if="images.length" class="images" :class="`image-${images.length}`">
        <el-image
          v-for="(img, index) in images"
          :key="index"
          :src="img"
          :preview-src-list="images"
          :initial-index="index"
          fit="cover"
          class="moment-image"
          hide-on-click-modal
        />
      </div>
    </div>

    <div class="actions">
      <span class="action-item" @click="toggleLike">
        <el-icon :color="isLiked ? '#f56c6c' : ''">
          <svg v-if="isLiked" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="currentColor"
              d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 0 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 0 0-54.272-54.336L456.192 600.384z"
            />
          </svg>
          <svg v-else viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="currentColor"
              d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm47.744-560.256a32 32 0 0 1 0 45.248l-127.04 127.04 127.04 127.04a32 32 0 1 1-45.248 45.248L480 589.248l-127.04 127.04a32 32 0 1 1-45.248-45.248l127.04-127.04-127.04-127.04a32 32 0 1 1 45.248-45.248l127.04 127.04 127.04-127.04a32 32 0 0 1 45.248 0z"
            />
          </svg>
        </el-icon>
        {{ isLiked ? '已赞' : '点赞' }}
      </span>
      <span class="action-item" @click="showCommentInput = !showCommentInput">
        <el-icon><ChatDotRound /></el-icon>
        评论
      </span>
    </div>

    <div v-if="showCommentInput" class="comment-input">
      <el-input v-model="commentText" placeholder="说点什么..." :rows="2" type="textarea" />
      <div class="input-actions">
        <el-button size="small" @click="cancelComment">取消</el-button>
        <el-button size="small" type="primary" @click="addComment">发送</el-button>
      </div>
    </div>

    <div v-if="comments.length" class="comments">
      <div v-for="(comment, index) in comments" :key="index" class="comment-item">
        <span class="comment-user">{{ comment.user }}：</span>
        <span class="comment-text">{{ comment.text }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.moment-card {
  width: 100%;
  max-width: 600px;
  margin: 0 auto 20px;
  padding: 16px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  .user-info {
    display: flex;
    align-items: center;
    margin-bottom: 12px;

    .user-text {
      margin-left: 12px;
      display: flex;
      flex-direction: column;

      .username {
        font-size: 16px;
        font-weight: 500;
        color: #333;
      }

      .time {
        font-size: 12px;
        color: #999;
        margin-top: 2px;
      }
    }
  }

  .content {
    margin-bottom: 12px;

    p {
      margin: 0 0 12px;
      font-size: 15px;
      line-height: 1.5;
      color: #333;
      word-break: break-word;
    }

    .images {
      display: grid;
      gap: 6px;

      &.image-1 {
        grid-template-columns: 1fr;
      }

      &.image-2,
      &.image-4 {
        grid-template-columns: repeat(2, 1fr);
      }

      &.image-3,
      &.image-5,
      &.image-6,
      &.image-7,
      &.image-8,
      &.image-9 {
        grid-template-columns: repeat(3, 1fr);
      }

      .moment-image {
        width: 100%;
        height: 0;
        padding-bottom: 100%;
        border-radius: 4px;
        overflow: hidden;
        cursor: pointer;

        :deep(.el-image__inner) {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }

  .actions {
    display: flex;
    padding: 8px 0;
    border-top: 1px solid #f0f0f0;
    border-bottom: 1px solid #f0f0f0;

    .action-item {
      display: flex;
      align-items: center;
      margin-right: 20px;
      font-size: 14px;
      color: #666;
      cursor: pointer;

      .el-icon {
        margin-right: 4px;
        font-size: 16px;
      }

      &:hover {
        color: #409eff;
      }
    }
  }

  .comment-input {
    margin-top: 12px;

    .input-actions {
      display: flex;
      justify-content: flex-end;
      margin-top: 8px;
    }
  }

  .comments {
    margin-top: 12px;

    .comment-item {
      padding: 6px 0;
      font-size: 14px;
      line-height: 1.4;

      .comment-user {
        color: #576b95;
        font-weight: 500;
      }

      .comment-text {
        color: #333;
      }
    }
  }
}
</style>
