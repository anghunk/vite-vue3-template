<template>
  <div class="error-page">
    <div class="error-content">
      <h1 class="error-code">500</h1>
      <p class="error-message">抱歉，服务器出错了</p>
      <el-button type="primary" @click="goHome">返回首页</el-button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goHome = () => {
  router.push('/');
};
</script>

<style scoped>
.error-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f7fa;
}

.error-content {
  text-align: center;
}

.error-code {
  font-size: 120px;
  font-weight: bold;
  color: #f56c6c;
  margin: 0;
}

.error-message {
  font-size: 24px;
  color: #606266;
  margin: 20px 0 40px;
}
</style>
