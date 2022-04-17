<!--
 * @Author: wjs
 * @Date: 2022-03-21 14:29:58
 * @Description: 模板页
 * @FilePath: \receive-platform\src\layout\index.vue
 * 
-->
<template>
  <el-container class="container">
    <el-header class="headerstyle">
      <div style="display: flex; align-items: center">
        <img :src="require(`@/assets/logo.png`)" alt style="height: 50px" />
      </div>

      <el-menu
        :default-active="$route.path"
        router
        class="el-menu-demo"
        mode="horizontal"
      >
        <el-menu-item index="/home">首页</el-menu-item>
        <el-menu-item index="/myGuarantee">我的保函</el-menu-item>
        <el-menu-item index="/checkGuarantee">保函查验</el-menu-item>
        <el-menu-item index="/settlementOfClaims">理赔申请</el-menu-item>
        <el-menu-item index="/info">我的信息</el-menu-item>
      </el-menu>
      <div class="companyName">
        <div>测试</div>
      </div>
    </el-header>

    <el-scrollbar ref="layoutScrollbarRef" class="layout-backtop">
      <!-- 主体 -->
      <el-main class="layout-main">
        <router-view></router-view>
      </el-main>
    </el-scrollbar>
  </el-container>
</template>

<script>
export default {
  name: "layout",
  data() {
    return {};
  },

  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.headerstyle {
  display: flex;
  padding: 0;
  justify-content: space-around;
  align-items: center;
  padding: 0 15px;
  box-shadow: 1px 2px 3px #cccccc;
  background-color: #ffffff;

  div {
    flex: 1;

    &.companyName {
      text-align: right;
    }
  }
}

.container .layout-main {
  padding: 15px !important;
}

.layout-backtop {
  flex: 1;
}
</style>
