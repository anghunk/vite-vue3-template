<template>
  <div class="default-layout">
    <header class="layout-header">
      <!-- 头部内容 -->
      <slot name="header"></slot>
    </header>
    
    <main class="layout-main">
      <slot></slot>
    </main>
    
    <footer class="layout-footer">
      <!-- 底部内容 -->
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script setup>
</script>

<style scoped>
.default-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.layout-header {
  height: 60px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.layout-main {
  flex: 1;
  padding: 20px;
}

.layout-footer {
  height: 60px;
  background-color: #f5f7fa;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
