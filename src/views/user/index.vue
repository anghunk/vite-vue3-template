<template>
  <div class="user-container">
    用户中心
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
