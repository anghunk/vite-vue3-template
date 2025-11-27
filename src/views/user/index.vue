<template>
  <div class="user-container">
    <h1>用户中心</h1>
    <p>这是用户中心页面</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

onMounted(() => {
  console.log('用户中心页面加载完成');
});
</script>

<style scoped>
.user-container {
  padding: 20px;
}
</style>
