<template>
  <h1 class="text-4xl">{{ msg }}</h1>
  <div class="card">
    <el-button type="primary" @click="count++">count is {{ count }}</el-button>
  </div>
  <p class="mb-5">这是一个基于 vite + vue3 的开发模板</p>
  <p class="mb-5">
    <a href="https://github.com/anghunk/vite-vue3-template">
      https://github.com/anghunk/vite-vue3-template
    </a>
  </p>
  <p>已经引入 vuex，router，axios，element-plus，less 等开发工具</p>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  props: ["msg"],
};
</script>
