<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/user">User</router-link>
  </nav>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
};
</script>
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
