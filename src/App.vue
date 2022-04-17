<!--
 * @Author: wjs
 * @Date: 2022-03-21 14:16:14
 * @Description: 
 * @FilePath: \receive-platform\src\App.vue
 * 
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="scss">
#app,
.el-container,
.el-main,
body,
html {
  height: 100% !important;
  padding: 0 !important;
  margin: 0 !important;
  box-sizing: border-box;
  background-color: #f8f8f8;
  font-size: 14px;
}

p {
  padding: 0;
  margin: 0;
}

#app {
  font-family: "微软雅黑", Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>
